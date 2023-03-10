import environment from '../../../environment';
import Auth from '@aws-amplify/auth';

const login = async () => {
  window.open(environment.COGNITO_AUTH, '_self');
};

const logout = async () => {
  await Auth.signOut({ global: true });
  localStorage.clear();
  window.open('/');
};

const AuthService = {
  login,
  logout,
};

export default AuthService;
