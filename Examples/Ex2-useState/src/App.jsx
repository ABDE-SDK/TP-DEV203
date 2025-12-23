import React from 'react';
import { useState } from 'react';


export default function Validator() {
  const [password, setPassword] = useState('')
  return (
    <>
      <div className='input-group'>
        <label htmlFor="password">Enter your password: </label>
        <input
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <div>
        <p className='results'>{password.length
          < 4 ? "Password should be at least 4 characters" : "strong password"}</p>
      </div>
    </>
  )
}