const BASE_DOMAIN = "dribbble.com";
const PREFIX_HTTPS = `https://`;

const ENDPOINTS = {
  API: `${PREFIX_HTTPS}api.${BASE_DOMAIN}`,
  TOKEN: `${PREFIX_HTTPS}${BASE_DOMAIN}/oauth/token`,
  USER: `${PREFIX_HTTPS}api.${BASE_DOMAIN}/v1/user`,
}

// let authOptions = {
//   client_id: '798e34202ce61fc41f4a6c40b06db321393a26eb7ba0c8376d52e2e00c865b8d',
//   redirect_uri: `http://127.0.0.1:3000#/home`,
//   scopes: 'public+upload',
//   state: makeStateCode(),
// };

const TOKEN_OPTIONS = {
  CLIENT_ID: '798e34202ce61fc41f4a6c40b06db321393a26eb7ba0c8376d52e2e00c865b8d',
  CLIENT_SECRET: '8cd4302a857f46c8fbd7145d2023ac9c4d0a4ec67280bf3f3372497fa6139259',
  REDIRECT_URI: `http://127.0.0.1:3000#/home`,
};

function makeStateCode() {
  var text = '';
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (var i = 0; i < 8; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}

export function authenticateWithDribbble() {
  var data = [
    'client_id=' + TOKEN_OPTIONS.CLIENT_ID,
    'state=' + makeStateCode(),
    'scope=public+upload',
    'redirect_uri=urn:ietf:wg:oauth:2.0:oob'
  ].join('&');

  return fetch(ENDPOINTS.TOKEN, {
    method: 'POST',
    body: data
  })
}

export function getDribbbleToken(code) {
  return fetch(ENDPOINTS.TOKEN, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      client_id: TOKEN_OPTIONS.CLIENT_ID,
      client_secret: TOKEN_OPTIONS.CLIENT_SECRET,
      code,
    })
  })
  .then(response => response.json()) // @TODO should we store the token?? how???
  .catch((error) => {
    console.error(error);
  });
}

export function getUserData(token) {
  return fetch(ENDPOINTS.USER, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  })
  .then(response => response.json())
  .then(r => console.log(r))
  .catch((error) => console.log(error));
}

export function getUserTeams(teamsUrl, token) {
  return fetch(teamsUrl, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`,
    }
  })
  .then(response => response.json())
  .then(r => console.log(r))
  .catch((error) => console.log(error));
}
