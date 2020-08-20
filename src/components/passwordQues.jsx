import React, { useState } from 'react'

export default function PasswordQues() {
  const [pass, setPass] = useState('');

  const checkPass = () => {
    let finalCount = 0;
    let lowerCaseLetters = /[a-z]/g;
    let upperCaseLetters = /[A-Z]/g;
    let numbers = /[0-9]/g;
    let special = /[!@#$%^&*()-+]/;
  
    if(!pass.match(lowerCaseLetters)){
        finalCount++;
    }
    if(!pass.match(upperCaseLetters)){
        finalCount++;
    }
    if(!pass.match(numbers)){
        finalCount++;
    }
    if(!pass.match(special)){
        finalCount++;
    }

    if(pass.length < 6){
        alert(`minimum length - ${(6 - pass.length) > finalCount ? (6 - pass.length) : finalCount}`);
    } else {
        alert(finalCount)
    }
  }

    return (
        <div>
            <input type="text" value={pass} onChange={e => setPass(e.target.value)}/>
            <button onClick={() => checkPass()}>Test</button>
        </div>
    )
}
