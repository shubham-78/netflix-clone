import React, { useState } from 'react'
import '../css/loginScreen.css';
import SignupScreen from './SignupScreen';

function LoginScreen() {
    const [signIn, setSignIn] = useState(false);

    return (
        <div className='loginScreen'>
            <div className='loginScreen_background'>
                <img
                    className='loginScreen_logo'
                    src='https://images.ctfassets.net/y2ske730sjqp/1aONibCke6niZhgPxuiilC/2c401b05a07288746ddf3bd3943fbc76/BrandAssets_Logos_01-Wordmark.jpg?w=940'
                    alt=''
                />
                <button className='loginScreen_button' onClick={() => setSignIn(true)}>Sign In</button>
                <div className='loginScreen_gradient'></div>
            </div>
            <div className='loginScreen_body'>
                {signIn ? (
                    <SignupScreen />
                ) : (
                    <>
                        <h1>Unlimited films, TV programmes and more.</h1>
                        <h2>Watch anywhere. Cancel at any time.</h2>
                        <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                        <div className='loginScreen_input'>
                            <form>
                                <input type='email' placeholder='Email Address' />
                                <button className='loginScreen_getStarted' onClick={() => setSignIn(true)}>GET STARTED</button>
                            </form>
                        </div>
                    </>
                )}

            </div>
        </div>
    )
}

export default LoginScreen