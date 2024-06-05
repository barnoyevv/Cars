import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./index.css"

const Index = () => {
	const [form, setForm] = useState({})
	const navigate = useNavigate();

	const handleChange =(e)=>{
		const {value, name} = e.target
		setForm({...form, [name]:value})
	};
	const handleSubmit =(e)=>{
		e.preventDefault();
		const {username, password} = form
		if (username === "admin" && password === "123") {
			navigate("/main")
		}else{
			alert("404")
		}
	}
	return (
		<div className="login-page">
			<div className="login-card">
				<form id="submit" onSubmit={handleSubmit}>
				<h1>Login</h1>
				<input type="text" onChange={handleChange} placeholder="Username" name="username" required/>
				<input type="password" onChange={handleChange}  placeholder="Password" name="password" required/>
				<button type="submit" form="submit">Log in</button>
				</form>
			</div>
		</div>
	)
}

export default Index
