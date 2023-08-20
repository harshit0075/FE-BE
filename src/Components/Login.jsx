import React, { useState } from 'react'

 const Login = () => {
    // const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setpass] = useState("");

    const handleSubmit = () => {
        const payload = {
            email,
            pass
        };

        //connecting FE to BE
        fetch("https://fair-teal-scallop-yoke.cyclic.cloud/users/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        })
        .then(res => res.json())
        .then(res => {
            console.log(res)
        localStorage.setItem("token",res.token)
        })
        .catch(err => console.log(err));

        // Clear input fields
        // setName("");
        setEmail("");
        setpass("");
    };

    return (
        <div>
            <h3>Login Form</h3>
            {/* <label htmlFor="username">Username</label>
            <br />
            <input type='text' name='username' value={name} 
            onChange={(e) => setName(e.target.value)} />
            <br /> */}
            <label htmlFor="email">Email</label>
            <br />
            <input type='text' name='email' value={email}
             onChange={(e) => setEmail(e.target.value)} />
            <br/>
            <label htmlFor="pass">pass</label>
            <br />
            <input type='text' name='pass' value={pass}
             onChange={(e) => setpass(e.target.value)}/>
            <br/>
            <button onClick={handleSubmit}>Login!</button>
        </div>
    );
}

export{Login}