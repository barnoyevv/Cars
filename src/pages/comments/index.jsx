import { useState } from "react"
import { useEffect } from "react"
import axios from "axios"

const Comments = () => {
	const [users,setUsers] = useState([])
	const [page, setPage] = useState(1)
	const [limit, setLimit] = useState(2)
  useEffect(()=>{
    axios.get(`https://jsonplaceholder.typicode.com/comments?_page=${page}&_limit=${limit}`).then(response=>{
      console.log(response)
      setUsers(response.data)
    })
  },[page, limit])
	const changePage =(type)=>{
		if (type === "prev") {
			if (page > 1) {
				setPage(prev => prev - 1)
			}
		}else {
			setPage(prev => prev + 1)
		}
	}
  return (
    <div className='users'>
      <h1 className='text-center my-3'>Comments</h1>
			<div className="row">
				<div className="col-md-6">
					<select onChange={(e)=>setLimit(e.target.value)} className="form-control my-2">
						<option value="" selected>Select limit</option>
						<option value="3">3</option>
						<option value="4">4</option>
						<option value="5">5</option>
					</select>
				</div>
			</div>
     <table className='table table-bordered table-hover table-striped'>
      <thead>
        <tr>
          <th>PostID</th>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Body</th>
        </tr>
      </thead>
      <tbody>
        {
          users.map((item,index)=>(
            <tr key={index}>
            <td>{item.postId}</td>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.body}</td>
            </tr>
          ))
        }
      </tbody>
     </table>
		 <div className="d-flex gap-3 align-items-center">
			<button className="btn btn-danger" onClick={()=>changePage("prev")}>Prev</button>
			<p>{page}</p>
			<button className="btn btn-success" onClick={()=>changePage("next")}>Next</button>
		 </div>
    </div>
  )
}

export default Comments
