import React from "react";
import axios from "axios";

function App(props) {
    function handleClick1(){
        axios.get("/path1");
    }
    function handleClick2(){
        axios.get("/path2?city=서울&address=서울어딘가");
    }
    function handleClick3(){
        axios.get("/path3?name=길동&age=26");
    }
    return (
        <div>
            <div>
                <button onClick={handleClick1}>/path1 get 요청</button>
            </div>
            <div>
                <button onClick={handleClick2}>
                    /path2 get 요청, city, address 요청 파라미터 첨부
                </button>
            </div>
            <div>
                <button onClick={handleClick3}>
                    /path3 get 요청, name, age 요청 파라미터가 첨부
                </button>
            </div>
        </div>
    );
}

export default App;
