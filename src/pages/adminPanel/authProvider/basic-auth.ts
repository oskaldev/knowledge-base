import { AUTH_LOGIN, AuthActionType } from 'react-admin'

interface IParams {
  username: string
  password: string
}

export const authBasicProvider = (type: AuthActionType, params: IParams) => {
  if (type === AUTH_LOGIN) {
    const { username, password } = params;
    const request = new Request('https://mydomain.com/authenticate', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: new Headers({ 'Content-Type': 'application/json' }),
    })
    return fetch(request)
      .then(response => {
        if (response.status < 200 || response.status >= 300) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then(({ token }) => {
        localStorage.setItem('token', token);
      });
  }
  return Promise.resolve();
}
