import { useEffect, useState } from "react";
import PlayerDown from "../../../assets/player/player_down.png"
import PlayerUp from "../../../assets/player/player_up.png"
import PlayerLeft from "../../../assets/player/player_left.png"
import PlayerRight from "../../../assets/player/player_right.png"
import Down from "../../../assets/player/player_right.png"
import { Direction } from "../../shared/types/Direction"
import Down0 from "../../../assets/player/down/down_0.png";
import Down1 from "../../../assets/player/down/down_1.png";
import Down2 from "../../../assets/player/down/down_2.png";
import Down3 from "../../../assets/player/down/down_3.png";

type PlayerProps = {
    x:number,
    y:number,
    direction:Direction
}

const playerSprites = {
    up: PlayerUp,
    down: PlayerDown,
    left: PlayerLeft,
    right: PlayerRight
};

const scale = {
    down: 1,
    up: 0.9,
    left: 1.08,
    right: 1.08,
};




const downFrames = [Down0, Down1, Down2, Down3];


export function Player({x,y,direction}:PlayerProps) {



const image = playerSprites[direction];

const [frame, setFrame] = useState(0);
const [walking,setWalking] =  useState(true);

useEffect(() => {

    const interval = setInterval(() => {
         if(walking) {  
        setFrame(prev => (prev + 1) % 4);
         }

    }, 150);

    return () => clearInterval(interval);

}, []);



    return (
            <img
    src={image}
    className="absolute h-12 z-10"
    style={{
        left: x,
        top: y,
        transform: "translate(-50%, -80%)"
    }}
/>
    )

}