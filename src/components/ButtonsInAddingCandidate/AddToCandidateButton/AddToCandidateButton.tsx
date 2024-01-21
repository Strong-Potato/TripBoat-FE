import {Button} from '@chakra-ui/react';
import {useRecoilValue} from 'recoil';

import {selectedCandidatesState} from '@/recoil/vote/candidateList';

//prop이나 params로 trip or vote 판별, onClick에 삼항연산자로 함수 넣기
const AddToCandidateButton = () => {
  const selectedCandidates = useRecoilValue(selectedCandidatesState);
  const counts = selectedCandidates.size;
  // const navigate = useNavigate();

  // const addCandidates = () => {
  //   // 경로 추후 수정
  //   // navigate(`${pathname}/`, { replace: true })
  // };
  const trip = true;

  return (
    <Button
      variant='CTAButton'
      isDisabled={counts === 0}
      // onClick={}
    >
      {counts ? `${counts}개 장소 ${trip ? '일정' : '후보'}에 추가하기` : '장소를 선택해주세요'}
    </Button>
  );
};

export default AddToCandidateButton;
