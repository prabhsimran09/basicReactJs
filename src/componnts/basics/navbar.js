import React from "react";

const NavBar = ({ filterCard, cuisineList }) => {
  return (
    <>
      <nav className="navbar">
        <div className="btn-group" >
        { cuisineList.map((curEle) =>{
            return(
          <button className="btn-group__item" onClick={() => { filterCard(curEle) }}> {curEle} </button>
          )
        })}
        </div>
      </nav>
    </>
  );
};

export default NavBar;
