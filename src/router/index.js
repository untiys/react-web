
import React, { lazy } from "react"
import {Navigate} from 'react-router-dom'

import Login from "../login/Login"
import Home from "../layout/Home"
import Desktop from "../pages/desktop/Desktop"
import Role from "../pages/sys/role"
import Station from "../pages/sys/station"
import Attendance from '../pages/statisticsManagement/attendance'
import Complete from '../pages/statisticsManagement/complete'
const routes = [
    {
        path: '/login',
        element:<Login />
    },
    {
        path: '/home',
        element: <Home />,
        children: [
            {
                path: '',
                element:<Desktop />
            },
            {
                path: 'desktop',
                element:<Desktop />
            },
            {
                path: 'sys',
                children: [
                    {
                        path: 'role',
                        element: <Role />,
                    },
                    {
                        path: 'station',
                        element:<Station />
                    },
                   
                ]
            },
            {
                path: 'statisticsManagement',
                children: [
                    {
                        path: 'attendance',
                        element:<Attendance />
                    },
                    {
                        path: 'complete',
                        element:<Complete />
                    }
                ]
            }
        ]
    },
    {
        path: '/',
        element: <Navigate to={'/home'} />
    },
   
]

export default routes
