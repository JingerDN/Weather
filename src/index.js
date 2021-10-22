import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.css';
import "./style.scss";

import Greeting from "./components/Greeting/Greeting";
import Search from "./components/Search/Search";
import GetWeather from "./components/GetWeather/GetWeather";
import Navigation from "./components/Navigation/Navigation";


const App=()=>

<div>
<Navigation/>
<Greeting/>
<Search/>
<GetWeather/>  
</div>



  

ReactDOM.render(<App/>,document.getElementById("root"));








