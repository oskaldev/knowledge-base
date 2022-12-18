import { AuthProvider } from 'react-admin'
import { Simulate } from 'react-dom/test-utils'

interface IAuthProvider {
  username: string
  password: string
}

const admin = {
  username: import.meta.env.VITE_ADMIN_USERNAME,
  password: import.meta.env.VITE_ADMIN_PASSWORD
}

const authProvider: AuthProvider = {
  login: ({
    username,
    password
  }: IAuthProvider) => {
    if (username !== admin.username || password !== admin.password) {
      debugger
      return Promise.reject()
    }
    localStorage.setItem('username', username)
    return Promise.resolve()
  },
  logout: () => {
    localStorage.removeItem('username')
    return Promise.resolve()
  },
  checkAuth: () =>
    localStorage.getItem('username') === admin.username ? Promise.resolve() : Promise.reject(),
  checkError: (error) => {
    const status = error.status
    if (status === 401 || status === 403) {
      localStorage.removeItem('username')
      return Promise.reject()
    }
    // other error code (404, 500, etc): no need to log out
    return Promise.resolve()
  },
  getIdentity: () =>
    Promise.resolve({
      id: 'user',
      fullName: 'John Doe'
    }),
  getPermissions: () => Promise.resolve('')
}

export default authProvider
