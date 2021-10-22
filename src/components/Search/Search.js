import React from "react";
import "./style.scss";

export default function Search({inputData}){
return( <div>
<>
    <div className="grey_container">
    <div className="search_block">
        <div><input type="text" placeholder="Search city"/></div>
        
        <div><button>Search</button></div>
    </div>
    </div>
</>
</div>
)
}

      
