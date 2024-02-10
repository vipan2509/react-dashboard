import React from "react";
import "./Header.css";

function Header(){
    return (
        <div className="headerWrap">
            <div>Logo</div>
            <div className="headerRight">
                <ul>
                    <li><a href="#">Link 1</a></li>
                    <li><a href="#">Link 2</a></li>
                    <li><a href="#">Link 3</a></li>
                </ul>
            </div>
        </div>
    )
    
}
export default Header