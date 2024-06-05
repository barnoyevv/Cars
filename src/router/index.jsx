import React from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import App from '../App';
import {Login, Main, Cars, Singlecar} from "../pages/index"
const index = () => {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path='/' element={<App/>}>
				<Route index element={<Login/>}/>
				<Route path='main/*' element={<Main/>}>
					<Route index element={<Cars/>}/>
					<Route path='single-car/:id' element={<Singlecar/>}/>
				</Route>
			</Route>
		)
	)
	return <RouterProvider router={router}/>
}

export default index
