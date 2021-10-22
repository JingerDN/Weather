import React from "react";
import {Container} from 'react-bootstrap';
import badgeGoogle from "./google-play-badge.png";
import badgeApple from "./pngwing.com.png";
import autumn from "./mobile-app-banner-autumn-6.png";
import "./style.scss";

export default function greeting(){


return( <div>
<Container>
    <div className="wrapper">
    <div className="greeting">
        <div className="greeting_text">
            <div className="greeting_title">
                <h1 className="orange_text">OpenWeather</h1>
                <h1>mobile app</h1>
            </div>
            <div className="greeting_subtitle">
                <p>A scientific yet simple approach to weather forecast.</p>
                <p> Free. No ads.</p>
            </div>
            <div className="greeting_badges">
                <img src={badgeApple}/>
                <img src={badgeGoogle}/>
            </div>
        </div>
        </div>
        <div className="greeting_img">
            <img src={autumn}></img>
        </div>
    </div>
</Container>
</div>
)
}

      
