import React, { useState } from 'react';

const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setpass] = useState("");

    const handleSubmit = () => {
        const payload = {
            name,
            email,
            pass
        };

        //connecting FE to BE
        fetch("https://zany-erin-angler-yoke.cyclic.cloud/users/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        })
        .then(res => res.json())
        .then(res => console.log(res))
        .catch(err => console.log(err));

        // Clear input fields
        setName("");
        setEmail("");
        setpass("");
    };

    return (
        <div>
            <h3>Registration Form</h3>
            <label htmlFor="username">Username</label>
            <br />
            <input type='text' name='username' value={name} 
            onChange={(e) => setName(e.target.value)} />
            <br />
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
            <button onClick={handleSubmit}>Sign Up!</button>
        </div>
    );
};

export { Signup };
