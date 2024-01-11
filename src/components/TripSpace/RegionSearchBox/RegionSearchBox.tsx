import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { TfiSearch as SearchIcon } from "react-icons/tfi";
import { useNavigate } from "react-router-dom";

import styles from "./RegionSearchBox.module.scss";

import BackIcon from "@/assets/back.svg?react";
import CloseIcon from "@/assets/close.svg?react";

import { FormData, RegionSearchInputProps } from "@/types/regionSearch";

function RegionSearchInput({
  onInputChange,
  onSearchCompletionChange,
}: RegionSearchInputProps) {
  const navigate = useNavigate();
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [isSearchCompleted, setIsSearchCompleted] = useState(false);
  const { register, handleSubmit, setValue } = useForm<FormData>({
    mode: "onChange",
    defaultValues: {
      region: "",
    },
  });

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
      onSearchCompletionChange(true);
    }
  };

  const handleClearInput = () => {
    setValue("region", "");
    setIsSearchCompleted(false);
    onSearchCompletionChange(false);
  };

  useEffect(() => {
    console.log("포커스", isInputFocused);
    console.log("검색완료", isSearchCompleted);
  }, [isInputFocused, isSearchCompleted]);

  return (
    <form
      className={
        isInputFocused || isSearchCompleted
          ? styles.focusContainer
          : styles.container
      }
      onSubmit={handleSubmit(handleSearch)}
    >
      <div className={styles.inputContainer}>
        <div className={styles.inputContents}>
          {(isInputFocused || isSearchCompleted) && (
            <button onClick={() => navigate(-1)}>
              <BackIcon />
            </button>
          )}
          <input
            type="text"
            placeholder="여행 도시를 검색해보세요."
            onFocus={handleInputFocus}
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
