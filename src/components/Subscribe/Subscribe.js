import React from 'react';
import './Subscribe.style.css';
const Subscribe = () => {
    return (
        <div className='subscribe'>
            <div className='container'>
                <div className='subscribe-header'>
                    <h4>Be in the know</h4>
                    <p>Sign up to get the latest on products, styling and events.</p>
                </div>
                <div className='subscribe-form'>
                    <form>
                        <input type='text' placeholder='Email'/>
                    </form>
                </div>
            </div>
            
        </div>
    );
};

export default Subscribe;