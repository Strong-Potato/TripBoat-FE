import {Button} from '@chakra-ui/react';
import {useState} from 'react';

import styles from './RegionSearch.module.scss';

import {useGetRegions} from '@/hooks/Spaces/space';

import NoSearchResult from '@/components/TripSpace/NoSearchResult/NoSearchResult';
import RegionList from '@/components/TripSpace/RegionList/RegionList';
import RegionSearchBox from '@/components/TripSpace/RegionSearchBox/RegionSearchBox';
import RegionTagItem from '@/components/TripSpace/RegionTagItem/RegionTagItem';
import SelectHeader from '@/components/TripSpace/SelectHeader/SelectHeader';

import {Region} from '@/types/regionSearch';

function RegionSearch() {
  const {data: regions, error} = useGetRegions();
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [regionValue, setRegionValue] = useState('');
  const [selectedRegions, setSelectedRegions] = useState<string[]>([]);
  const [filteredRegions, setFilteredRegions] = useState<Region[]>(regions);

  if (error) {
    console.error('[ERROR] ', error.message);
  }

  const handleRegionsFiltered = (filteredRegions: Region[]) => {
    setFilteredRegions(filteredRegions);
  };

  const handleInputChange = (newIsInputFocused: boolean) => {
    setIsInputFocused(newIsInputFocused);
  };

  const handleRegionValueChange = (newRegionValue: string) => {
    setRegionValue(newRegionValue);
  };

  const handleRegionSelect = (regionName: string) => {
    if (selectedRegions.includes(regionName)) {
      setSelectedRegions((prevSelectedRegions) => prevSelectedRegions.filter((name) => name !== regionName));
    } else {
      if (selectedRegions.length < 4) {
        setSelectedRegions((prevSelectedRegions) => [...prevSelectedRegions, regionName]);
      }
    }
  };

  return (
    <div className={styles.container}>
      <header className={isInputFocused || regionValue ? styles.focusHeader : styles.header}>
        {!(isInputFocused || regionValue) && <SelectHeader title='어디로 떠나세요?' />}
        <RegionSearchBox
          regions={regions}
          onInputChange={handleInputChange}
          onRegionValueChange={handleRegionValueChange}
          onRegionsFiltered={handleRegionsFiltered}
        />
      </header>
      <div className={isInputFocused || regionValue ? styles.regionListsContainer__focus : styles.regionListsContainer}>
        {filteredRegions.length ? (
          <>
            {filteredRegions.map((region) => (
              <RegionList
                key={region.cityName}
                name={region.cityName}
                imageUrl={region.imageUrl}
                isSelected={selectedRegions.includes(region.cityName)}
                onSelect={handleRegionSelect}
              />
            ))}
          </>
        ) : (
          <NoSearchResult />
        )}
      </div>
      <div className={selectedRegions.length ? styles.regionChoiceContainer : ''}>
        <div className={styles.tagContainer}>
          {selectedRegions.map((region) => (
            <RegionTagItem
              key={region}
              label={region}
              onClose={() =>
                setSelectedRegions((prevSelectedRegions) => prevSelectedRegions.filter((name) => name !== region))
              }
            />
          ))}
        </div>
        <Button isDisabled={!selectedRegions.length} zIndex='3' variant='CTAButton'>
          {selectedRegions.length ? `${selectedRegions.length}개 선택 완료` : '도시를 선택해주세요'}
        </Button>
      </div>
    </div>
  );
}

export default RegionSearch;
