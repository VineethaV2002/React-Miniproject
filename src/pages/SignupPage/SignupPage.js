import React from 'react'
import './SignupPage.css'

function SignupPage() {
    return (
        <div className='signup'>
            <div className="background">
                <div className="shape"></div>
                <div className="shape"></div>
            </div>
            <form>
                <h3>Sign Up</h3>

                <label for="username">Username</label>
                <input type="text" placeholder="Email or Phone" id="username" />


                <label for="email">Email</label>
                <input type="text" placeholder="Email" id="email" />


                <label for="password">Password</label>
                <input type="password" placeholder="Password" id="password" />




                <button>Sign Up</button>
                <div className="social">
                    <div className="go"><i className="fab fa-google"></i>  Google</div>
                    <div className="fb"><i className="fab fa-facebook"></i>  Facebook</div>
                </div>
            </form>
        </div>
    )
}

export default SignupPage
