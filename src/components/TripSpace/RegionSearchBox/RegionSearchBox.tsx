import {useEffect, useState} from 'react';
import {useForm} from 'react-hook-form';
import {TfiSearch as SearchIcon} from 'react-icons/tfi';

import styles from './RegionSearchBox.module.scss';

import BackIcon from '@/assets/back.svg?react';
import CloseIcon from '@/assets/close.svg?react';

import {FormData, RegionSearchInputProps} from '@/types/regionSearch';

function RegionSearchInput({regions, onInputChange, onRegionValueChange, onRegionsFiltered}: RegionSearchInputProps) {
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [isSearchCompleted, setIsSearchCompleted] = useState(false);
  const {register, handleSubmit, setValue, watch} = useForm<FormData>({
    mode: 'onChange',
    defaultValues: {
      region: '',
    },
  });
  const regionValue = watch('region');

  const handleInputFocus = () => {
    setIsInputFocused(true);
    onInputChange(true);
  };

  const handleInputBlur = () => {
    setIsInputFocused(false);
    onInputChange(false);
  };

  const handleSearch = (data: FormData) => {
    const filteredRegions = regions.filter((region) =>
      region.cityName.toLowerCase().includes(data.region.toLowerCase()),
    );

    if (data.region) {
      setIsSearchCompleted(true);
      onRegionsFiltered(filteredRegions);
    }
  };

  const handleClearInput = () => {
    setValue('region', '');
    onRegionsFiltered(regions);
    setIsSearchCompleted(false);
  };

  useEffect(() => {
    onRegionValueChange(regionValue);
  }, [regionValue, onRegionValueChange]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSearch({region: regionValue});
    }
  };

  return (
    <form
      className={isInputFocused || regionValue ? styles.focusContainer : styles.container}
      onSubmit={handleSubmit(handleSearch)}
    >
      <div className={styles.inputContainer}>
        <div className={styles.inputContents}>
          {(isInputFocused || regionValue) && (
            <button onClick={handleClearInput}>
              <BackIcon />
            </button>
          )}
          <input
            type='text'
            placeholder='여행 도시를 검색해보세요.'
            onFocus={handleInputFocus}
            onKeyDown={handleKeyDown}
            {...register('region', {onBlur: handleInputBlur})}
          />
          {isSearchCompleted ? (
            <button type='button' onClick={handleClearInput}>
              <CloseIcon />
            </button>
          ) : (
            <button type='submit'>
              <SearchIcon size='2.4rem' color='#23272F' />
            </button>
          )}
        </div>
      </div>
      <div className={styles.underLine}></div>
    </form>
  );
}

export default RegionSearchInput;
