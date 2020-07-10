import React from 'react'


import loadable from '../utils/loadable'
import PrivateRoute from './privateRoute'



const Home = loadable(() => import('../pages/home'))
const Login = loadable(() => import('../pages/login'))
const Register = loadable(() => import('../pages/register'))
const Mine = loadable(() => import('../pages/mine'))
const Error404 = loadable(() => import('../pages/error'))
const Article = loadable(() => import('../pages/article'))



export const commonRoute = [
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
    path: '/article/:id',
    exact: true,
    component: Article
  },
]

