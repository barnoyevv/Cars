import React from "react";
import "./index.css"

const Index = () => {
  return (
    <div className="header">
      <nav className="navbar navbar-light ">
        <div className="container-fluid">
          <a className="navbar-brand"></a>
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-border-success btn-outline-success text-color-white" type="submit">Search</button>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Index;