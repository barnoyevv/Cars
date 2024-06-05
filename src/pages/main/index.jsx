import "./index.css"
import { Header, Sidebar } from "../../components"
import { Outlet } from "react-router-dom"
const Index = () => {
	return (
		<div className="main-layout">
			<Sidebar/>
			<div className="main-right">
				<Header/>
				<main className="main">
					<Outlet/>
				</main>
			</div>
		</div>
	)
}

export default Index
