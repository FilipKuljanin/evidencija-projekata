import axios from 'axios';
// import Environment from '../../../environment';
// import CognitoUserService from '../cognito-user.service';

const axiosInstance = axios.create({
  // baseURL: `${Environment.get('API_URL')}/v1`,
});

axiosInstance.interceptors.request.use(
  (config) => {
    config.headers = {
      Accept: 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json;charset=UTF-8',
      // 'x-cog-token': CognitoUserService.getXCogToken(),
    };
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response.status === 401) {
      window.location.href = '/sign-in';
    }

    if (error.response.status === 403) {
      window.location.href = '/dashboard';
    }

    if (error.response.status === 404) {
      window.location.href = '/dashboard';
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
