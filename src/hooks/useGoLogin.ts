import {useNavigate} from 'react-router-dom';

function useGoLogin() {
  const navigate = useNavigate();

  const useGoLogin = () => {
    navigate('/auth/login');
  };

  return useGoLogin;
}
export default useGoLogin;
