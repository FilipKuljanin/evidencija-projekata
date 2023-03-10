export default {
  Auth: {
    // REQUIRED - Amazon Cognito Region

    // OPTIONAL - Amazon Cognito User Pool ID
    region: 'us-east-1',
    userPoolId: 'us-east-1_ZXs9L7DeU',
    userPoolWebClientId: '6qrp0rbkuhpcp73cmhu1ont3ip',

    oauth: {
      domain: 'asset360-fieldnav-dev.auth.us-east-1.amazoncognito.com',
      scope: ['openid', 'role', 'email', 'aws.cognito.signin.user.admin'],
      redirectSignIn: window.origin,
      redirectSignOut: window.origin,
      responseType: 'code', // or 'token', note that REFRESH token will only be generated when the responseType is code
    },
  },
};
