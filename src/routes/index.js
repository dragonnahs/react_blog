import React from 'react'


import loadable from '../utils/loadable'
import PrivateRoute from './privateRoute'



const Home = loadable(() => import('../pages/home'))
const Login = loadable(() => import('../pages/login'))
const Register = loadable(() => import('../pages/register'))
const Mine = loadable(() => import('../pages/mine'))
const Error404 = loadable(() => import('../pages/error'))



export const commonRoute = [
  {
    path: '/404',
    exact: true,
    component: Error404
  },
  {
    path: '/login',
    exact: true,
    component: Login
  },
  {
    path: '/register',
    exact: true,
    component: Register
  },
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/mine',
    exact: true,
    component: Mine
  },
]

export const adminRoute = [
  // {
  //   path: '/cms/home',
  //   exact: true,
  //   component: Home
  // }
]

