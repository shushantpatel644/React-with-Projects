import React from "react";
import { useLinkClickHandler, useNavigate } from "react-router-dom";

const Labs=()=>{
    const nevigate = useNavigate();
    function clickHandler(){
        nevigate("/about");
    }

    return (
    <div>
        <div>
        This is Labs Page
        </div>
    <button onClick={clickHandler}>Move to Home Page</button>
    </div>
    )
}
export default Labs;