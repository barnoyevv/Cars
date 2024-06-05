import React, { useState } from "react";
import UserModal from "../modal";
import { NavLink } from "react-router-dom";
import { nanoid } from "nanoid";

const Index = () => {
	const [cars, setCars] = useState([
		{
			id: nanoid(),
			name: "cls63",
			price: "1 000 000$",
			color: "black",
			year: "2024",
			brand: "Mercedes Benz",
		},
	]);
	const [car, setCar] = useState({})
	const [modal, setModal] = useState(false);
	const [search, setSearch] = useState("");
	const openModal = (item) => {
		setCar(item)
		setModal(true)
	}
	const handleDelete = id => {
		setCars(cars.filter(car => car.id !== id));
	};

	const filteredCars = cars.filter(car =>
		car.name.toLowerCase().includes(search.toLowerCase())
	);
	const toggle =()=>{
		setModal(false)
		setCar({})
	}
	return (
		<div>
			<UserModal
				car = {car}
				open={modal}
				toggle={toggle}
				cars={cars}
				setCars={setCars}
			/>
			<div className="container">
				<div className="row mt-3">
					<div className="col-md-10 offset-1">
						<div className="row">
							<div className="col-md-4">
								<button
									className="btn btn-success"
									onClick={() => setModal(true)}
								>
									Add Car
								</button>
							</div>
							<div className="col-8">
								<input
									type="text"
									placeholder="Search..."
									className="form-control"
									value={search}
									onChange={e => setSearch(e.target.value)}
								/>
							</div>
						</div>
					</div>
				</div>
				<div className="row mt-3">
					<table className="table table-bordered table-hover table-striped">
						<thead>
							<tr>
								<th>T/R</th>
								<th>Name</th>
								<th>Year</th>
								<th>Color</th>
								<th>Price</th>
								<th>Brand</th>
								<th>Action</th>
							</tr>
						</thead>
						<tbody>
							{filteredCars.map((item, index) => (
								<tr key={item.id}>
									<td>{index + 1}</td>
									<td>{item.name}</td>
									<td>{item.year}</td>
									<td>{item.color}</td>
									<td>{item.price}</td>
									<td>{item.brand}</td>
									<td>
										<div className="d-flex gap-2 align-items-center">
											<button className="btn btn-primary" onClick={() => openModal(item)}>
												<i className="fa-solid fa-pen-to-square"></i>
											</button>
											<button
												className="btn btn-danger"
												onClick={() => handleDelete(item.id)}
											>
												<i className="fa-solid fa-trash"></i>
											</button>
											<NavLink
												to={`/main/single-car/${item.id}`}
												className="btn btn-warning"
											>
												<i className="fa-solid fa-eye"></i>
											</NavLink>
										</div>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default Index;
