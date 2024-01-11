import { useState } from "react";

import styles from "./InputWrapper.module.scss";

import { InputWrapperProps } from "@/types/detail";

function InputWrapper({ setIsValued }: InputWrapperProps) {
  const [text, setText] = useState<string>("");

  const handleSetValue = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = e.target.value;

    if (inputValue.length >= 5) {
      setIsValued(true);
    } else {
      setIsValued(false);
    }

    if (inputValue.length <= 100) {
      setText(inputValue);
    }
  };

  return (
    <div className={styles.container}>
      <textarea
        value={text}
        placeholder="솔직한 후기를 작성해주세요. (최소 5자 이상)"
        className={styles.container__input}
        onChange={(e) => handleSetValue(e)}
      />
      <div className={styles.container__count}>
        <span>{text.length}</span>
        <span>/ 100자</span>
      </div>
    </div>
  );
}

export default InputWrapper;
