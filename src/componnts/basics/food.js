import React, { useState } from "react" ;
import "./style.css";
import Card from "./foodcont" ;
import Menu from "./menuapi";
import NavBar from "./navbar";
import Header from "./header" ;

const uniqueList = [ ...new Set(Menu.map((curEle) =>{
    return( curEle.cuisine)
   })),"All"
];

const Food = () =>{
    const [menuData, setMenuData] = useState(Menu);
    const [cuisineList, setCuisineList] = useState(uniqueList);

    const filterCard = (cuisine) =>{

        if(cuisine === "All"){
            setMenuData(Menu);
            return ;
        }
        const updatedList = Menu.filter((curEle) =>{
            return curEle.cuisine === cuisine ;
        } );
        setMenuData(updatedList);
    } ;
    return(
    <>
        <Header />
        <NavBar filterCard = {filterCard} cuisineList={cuisineList}/>
        <Card menuData={menuData}/>
    </> );
}

export default Food ;