import React, { useState } from "react";

function Count() {

    const [counter, setCounter] = useState(0);

    function updateCount() {
        setCounter(counter + 1)
    }
    function update2Count() {
        setCounter(counter - 1)
    }
    function upReset(){
        setCounter(0)
    }
    return (
        <div className="count-container">
            <div>{counter}</div>
            <button className="btn" onClick={updateCount}>Increment</button>
            <button className="btn"  onClick={update2Count}>Decrement</button>
            <button className="btn"  onClick={upReset}>Reset</button>
        </div>
    );
}
export default Count