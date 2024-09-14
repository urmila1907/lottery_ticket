import { useState } from "react";
import "./MainLottoBall.css"
import LottoBall from "./LottoBall";

function MainLottoBall({num}){
    const nums = new Array(num);
    for(var i=0;i<num;i++) nums[i] = 1;

    const [arr,setArr] = useState(nums);

    function ballChange(){
        const arr1 = new Array(num);
        for(var i=0;i<num;i++) arr1[i] = Math.floor(Math.random() * 40) + 1;
        setArr(arr1);
    }

    return (
        <>
        <div className="box">
            <div className="balls">
                {arr.map((ball) => {
                    return <LottoBall ballNum={ball}/>
                })}
            </div>
            <button className="btn" onClick={ballChange}> Win the lottery!</button>
        </div>
        </>
    )
}

export default MainLottoBall;