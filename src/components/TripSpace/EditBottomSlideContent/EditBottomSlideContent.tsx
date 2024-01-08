import styles from "./EditBottomSlideContent.module.scss";

function EditBottomSlideContent() {  

  return (
    <div className={styles.ContentContainer}>
      <button>여행도시 편집</button>
      <button>여행날짜 수정</button>
      <button>여행 나가기</button>
    </div>
  );
}

export default EditBottomSlideContent;
