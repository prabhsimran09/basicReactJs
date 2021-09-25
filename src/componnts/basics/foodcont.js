import React from "react";

const Card = ({ menuData }) => {

 
  return (
    <div className="main-card-container" >

      { menuData.map((curEle) => {
             
        const {id, image, name, cuisine, descp} = curEle ;

        return (

          <div className="card-container" key={id}>

            <div className="card" key={id}>
              <div className="card-body">

                <div className="card-no">{id}</div>
                <div className="card-cuisine">{cuisine}</div>
                <div className="card-title">{name}</div>
                <div className="card-descp">{descp}</div>
                <div className="read">Read</div>
              </div>
              <img src={image}  alt={name}></img>   
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Card;
