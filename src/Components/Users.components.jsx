import React, { useState } from "react";
import "./Users.css";
import userIcon from "../assets/cornerIcon.png";
import groupIcon from "../assets/moptroIcon.png";
function Users() {
    const [searchInput, setSearchInput] = useState("")
    const employeData = [
        {id: 1, name: "Arjun", DOB: "16-11-2000", Role: "Software Engineer"},
        {id: 2, name: "Mahesh", DOB: "15-01-2000", Role: "Web Developer"},
        {id: 3, name: "Chetan", DOB: "11-05-2001", Role: "Doctor"},
    ] 

    const filteredArray = employeData.filter((employee) => (employee.name.toLowerCase().includes(searchInput.toLowerCase()))) 
  return (
    <div className="usersContainer">
      <div className="searchbar">
        <input type="search" placeholder="Search with name"  onChange={(e) => setSearchInput( e.target.value)}/>
      </div>
      <div className="users">
        <div className="cardscontainer">
            {filteredArray.map((employee) => (
                <div className="userParent">
                <div className={employee.id % 2 === 0 ? "even" : "odd" } key={employee.id}>
                    <p className="id">EMP ID : <span>{employee.id}</span></p>
                    {/* <br /> */}
                    <p className="name">Name : <span>{employee.name}</span></p>
                 
                    <p className="DOB">DOB : <span>{employee.DOB}</span></p>
                  
                    <p className="Role">Role : <span>{employee.Role}</span></p>
                    <br />
                </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Users;
