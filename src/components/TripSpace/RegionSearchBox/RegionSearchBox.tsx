import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { TfiSearch as SearchIcon } from "react-icons/tfi";

import styles from "./RegionSearchBox.module.scss";

import useGoBack from "@/hooks/useGoBack";

import BackIcon from "@/assets/back.svg?react";
import CloseIcon from "@/assets/close.svg?react";

import { FormData, RegionSearchInputProps } from "@/types/regionSearch";

function RegionSearchInput({
  onInputChange,
  onRegionValueChange,
}: RegionSearchInputProps) {
  const goBack = useGoBack();
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [isSearchCompleted, setIsSearchCompleted] = useState(false);
  const { register, handleSubmit, setValue, watch } = useForm<FormData>({
    mode: "onChange",
    defaultValues: {
      region: "",
    },
  });
  const regionValue = watch("region");

  const handleInputFocus = () => {
    setIsInputFocused(true);
    onInputChange(true);
  };

  const handleInputBlur = () => {
    setIsInputFocused(false);
    onInputChange(false);
  };

  // FIXME: 검색 클릭 핸들링 수정
  const handleSearch = (data: FormData) => {
    console.log("input:", data.region);
    // TODO: 검색 로직 구현

    if (data.region) {
      setIsSearchCompleted(true);
    }
  };

  const handleClearInput = () => {
    setValue("region", "");
    setIsSearchCompleted(false);
  };

  useEffect(() => {
    onRegionValueChange(regionValue);
  }, [regionValue, onRegionValueChange]);

  useEffect(() => {
    console.log("포커스", isInputFocused);
    console.log("입력값", regionValue);
    console.log("result", isInputFocused || regionValue);
  }, [isInputFocused, regionValue]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSubmit(handleSearch)();
    }
  };

  return (
    <form
      className={
        isInputFocused || regionValue ? styles.focusContainer : styles.container
      }
      onSubmit={handleSubmit(handleSearch)}
    >
      <div className={styles.inputContainer}>
        <div className={styles.inputContents}>
          {(isInputFocused || regionValue) && (
            <button onClick={goBack}>
              <BackIcon />
            </button>
          )}
          <input
            type="text"
            placeholder="여행 도시를 검색해보세요."
            onFocus={handleInputFocus}
            onKeyDown={handleKeyDown}
            {...register("region", { onBlur: handleInputBlur })}
          />
          {isSearchCompleted ? (
            <button type="button" onClick={handleClearInput}>
              <CloseIcon />
            </button>
          ) : (
            <button type="submit">
              <SearchIcon size="2.4rem" color="#23272F" />
            </button>
          )}
        </div>
      </div>
      <div className={styles.underLine}></div>
    </form>
  );
}

export default RegionSearchInput;
