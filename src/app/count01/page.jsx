"use client"

import { useState } from "react";



export default function Count01(){
    const [count, setCount] = useState(0);
    const [num, setNum] = useState(5);

    function countUp(){
        setCount(count + 1);
    }

    function countDown(){
        setCount(count - 1);
    }

    const add = () =>{
        // prevState 는 이전 상태값을 말한다.
        setNum((prevState) => prevState + 1);
    }
    const sub = () =>{
        setNum((prevState) => prevState - 1);
    }
    return(
        <div>
            <h2> useState 훅 사용 (state 관리) </h2>
            <button onClick={countDown}>감소</button>
            <span style={{margin: "0 20px"}}>{count}</span>
            <button onClick={countUp}>증가</button>
            <hr />

            <button onClick={sub}>감소</button>
            <span style={{margin: "0 20px"}}>{num}</span>
            <button onClick={add}>증가</button>
        </div>
    )
}