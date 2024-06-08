import React from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import App from '../App';
import {Login, Main, Cars, Albums, Comments, Photos, Posts, Todos, Users} from "../pages/index"
const Index = () => {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path='/' element={<App/>}>
				<Route index element={<Login/>}/>
				<Route path='main/*' element={<Main/>}>
					<Route index element={<Cars/>}/>
					<Route path='albums' element={<Albums/>}/>
					<Route path='comments' element={<Comments/>}/>
					<Route path='photos' element={<Photos/>}/>
					<Route path='posts' element={<Posts/>}/>
					<Route path='todos' element={<Todos/>}/>
					<Route path='users' element={<Users/>}/>
				</Route>
			</Route>
		)
	)
	return <RouterProvider router={router}/>
}

export default Index
