import React, { useState } from "react";
import "./Dashboard.css";
import userIcon from "../assets/cornerIcon.png";
import groupIcon from "../assets/moptroIcon.png";
import Users from "./Users.components";
function Dashboard() {

    const [Dashboard,setDashboard] = useState(true)
    const [users, setUsers] = useState(false)
    const leftImg = "https://static.thenounproject.com/png/3574480-200.png"
    const rightImg = "https://cdn-icons-png.flaticon.com/512/666/666201.png"


    const bottomLeftBackgroundHandler = () => {
        setDashboard(true)
        setUsers(false)
    }
    const bottomRightBackgroundHandler = () => {
        setUsers(true)
        setDashboard(false)
        
    }
  return (
    <div className="dashboard-container">
      <div className="cornericon">
        
        <img src={userIcon} alt="" />
      </div>
      <div className="groupIcon">
        <img src={groupIcon} alt="" />
        <span>4</span>
      </div>
      
     {Dashboard ?  <div className="daywiseproductivity">
     <div className="productivitydiv">
        <div>
          <h3>Employee Productivity Dashboard</h3>
        </div>
      </div>
        <div className="progresscard">
        <div className="monday">
          <div>
            <p className="title">Productivity on Monday</p>
            <p className="percentageofcompletion">4%</p>
          </div>
          <div className="input">
            <input
              type="range"
              value={4}
              min={0}
              max={200}
              className="slider"
            />
          </div>
        </div>
        <div className="tuesday">
         <div>
         <p className="title">Productivity on Tuesday</p>
          <p className="percentageofcompletion">92%</p>
         </div>
         <div  className="input">
         <input
              type="range"
              value={92}
              min={0}
              max={200}
              className="slider"
            />
         </div>
        </div>
        <div className="wednesday">
          <div>
          <p className="title">Productivity on Wednesday</p>
          <p className="percentageofcompletion">122%</p>
          </div>
          <div  className="input">
          <input
              type="range"
              value={122}
              min={0}
              max={200}
              className="slider"
            />
          </div>
        </div>
        <div className="thursday">
         <div>
         <p className="title">Productivity on Thursday</p>
          <p className="percentageofcompletion">93%</p>
         </div>
         <div  className="input">
         <input
              type="range"
              value={93}
              min={0}
              max={200}
              className="slider"
            />
         </div>
        </div>
        <div className="friday">
         <div>
         <p className="title">Productivity on Friday</p>
          <p className="percentageofcompletion">89%</p>
         </div>
         <div  className="input">
         <input
              type="range"
              value={89}
              min={0}
              max={200}
              className="slider"
            />
         </div>
        </div>
        <div className="saturday">
        <div>
        <p className="title">Productivity on Saturday</p>
          <p className="percentageofcompletion">98%</p>
        </div>
        <div  className="input">
        <input
              type="range"
              value={98}
              min={0}
              max={200}
              className="slider"
            />
        </div>
        </div>
        </div>
      </div> : <Users/>}
      <div className="bottom-div">
       
        <div className={Dashboard ? "left" : "displaynone"}>
            <img src={leftImg} alt="" onClick={bottomLeftBackgroundHandler} />
        </div>

        <div className={users ? "right" : "displaynone2"}>
            <img src={rightImg} alt="" onClick={bottomRightBackgroundHandler} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
