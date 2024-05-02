import React, { useState } from 'react';

export default function Newsletter() {
    const [email, setEmail] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(email);
    }

    return (
        <div style={{ backgroundColor: '#1F2125', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <form onSubmit={handleSubmit}>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='email address' />
                <button type='submit' className='btn'>Contact</button>
            </form>
        </div>
    )
}
