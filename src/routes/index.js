import React from 'react'


import loadable from '../utils/loadable'
import PrivateRoute from './privateRoute'



const Home = loadable(() => import('../pages/home'))
const AddAd = loadable(() => import('../pages/ad/add'))
const AddList = loadable(() => import('../pages/ad/list'))
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
  }
]

export const adminRoute = [
  {
    path: '/cms/home',
    exact: true,
    component: Home
  },
  {
    path: '/cms/add_ad',
    exact: true,
    component: AddAd
  },
  {
    path: '/cms/ad_list',
    exact: true,
    component: AddList
  }
]

