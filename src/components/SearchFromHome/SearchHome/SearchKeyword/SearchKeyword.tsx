import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';

import styles from './SearchKeyword.module.scss';

import useComponentSize from '@/hooks/useComponetSize';

import SlideButton from '@/components/SlideButton/SlideButton';

import {getData} from '@/mocks/handlers/home';

interface Propstype {
  setKeywordClick: React.Dispatch<React.SetStateAction<boolean>>;
}

function SearchKeyword({setKeywordClick}: Propstype) {
  const [data, setData] = useState<{name: string; code: string}[] | undefined>();
  const [listWidth, setListWidth] = useState<number>(0);
  const [slideLocation, setSlideLocation] = useState<number>(0);
  const [componentRef, size] = useComponentSize();
  const navigate = useNavigate();

  useEffect(() => {
    getData<{name: string; code: string}[] | undefined>('api/places/popular/keywords', setData);
  }, []);

  // 각 키워드의 너비를 모두 더한 값을 구함
  useEffect(() => {
    // 정확한 이유를 찾지 못하였으나 setTimeout을 걸지 않으면 각 p태그의 width가 실제보다 다소 큰 수가 반영됨
    setTimeout(() => {
      if (data && componentRef.current && componentRef.current?.childNodes.length === data.length) {
        const pTags = componentRef.current.querySelectorAll('p');
        const widths = Array.from(pTags).map((pTag) => {
          const rect = pTag.getBoundingClientRect();
          return rect.width;
        });
        const width = widths.reduce((acc, width) => acc + width, 0);
        setListWidth(width);
      }
    }, 100);
  }, [data, componentRef]);

  return (
    <div className={styles.container}>
      {data && (
        <SlideButton
          slideLocation={slideLocation}
          setSlideLocation={setSlideLocation}
          itemWidth={listWidth / data.length}
          flexGap={8}
          itemNumber={data.length}
          slideSize={size}
          buttonSize={24}
        />
      )}
      <div
        className={styles.slide_box}
        ref={componentRef}
        style={{
          overflow: size.width < 449 ? 'scroll' : 'visible',
          left: slideLocation + 'px',
        }}
      >
        {data ? (
          data.map((keyword, i) => (
            <p
              key={keyword.name + i}
              onClick={() => {
                setKeywordClick(true);
                setTimeout(() => {
                  setKeywordClick(false);
                }, 2000);
                navigate(`/home/search?keyword=${keyword.name}&category=0&map=false&location=전국&sort=등록순`);
              }}
            >
              {keyword.name}
            </p>
          ))
        ) : (
          <p>.</p>
        )}
      </div>
    </div>
  );
}

export default SearchKeyword;
