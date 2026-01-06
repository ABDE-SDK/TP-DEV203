import React, { useState } from "react";

function CheckInput(props) {

    const [name, setName] = useState("")
    const [age, setAge] = useState(0)
    const [message, setMessage] = useState(props.message)
    const [rank, setRank] = useState("")
    const [gender, setGender] = useState("")

    function handleName(e) {
        setName(e.target.value)
    }
    function handleAge(e) {
        setAge(e.target.value)
    }
    function handleMessage(e) {
        setMessage(e.target.value)
    }
    function handleRank(e) {
        setRank(e.target.value)
    }
    function handleGender(e) {
        setGender(e.target.value)
    }
    function handleFocus(){
        setMessage("")
    }

    return (
        <>
            <div>
                <div className="input-container">
                    <input value={name} onChange={handleName} />
                    <p>Your name: {name}</p>
                </div>
                <div className="input-container">
                    <input value={age} type="number" onChange={handleAge} />
                    <p>Your age: {age}</p>
                </div>
                <div className="input-container">
                    <textarea value={message} onFocus={handleFocus} onChange={handleMessage} />
                    <p>Your message: {message}</p>
                </div>
                <div className="input-container">
                    <select value={rank} onChange={handleRank}>
                        <option value="">chose your rank</option>
                        <option value="20-50">between 20-50</option>
                        <option value="50-80">between 50-80</option>
                        <option value="80-100">between 80-100</option>
                    </select>
                    <p>Your ranke between: {rank}</p>
                </div>
                <div className="input-container">
                    <label className="radio-group">
                        <input type="radio" onChange={handleGender}
                            value="Male" checked={gender === "Male"} />Male
                    </label>
                    <label className="radio-group">
                        <input type="radio" value="Female"
                            checked={gender === "Female"} onChange={handleGender} />Female
                    </label>
                </div>
            </div>
        </>
    )
}

export default CheckInput
