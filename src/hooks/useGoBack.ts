import { useNavigate } from "react-router-dom";

function useGoBack() {
  const navigate = useNavigate();

  const useGoBack = () => {
    navigate(-1);
  };

  return useGoBack;
}
export default useGoBack;
