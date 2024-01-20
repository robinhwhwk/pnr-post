import Input from "./Input";
import Button from "./Button";
import { useState } from "react";
import axios from "axios";

function AuthModal() {
    const [modalType, setModalType] = useState('login');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function register(e) {
        e.preventDefault();
        const data = {email, username, password};
        axios.post('http://localhost:4000/register', data, {withCredentials:true})
    }

    return (
        <div className="w-screen h-screen top-0 left-0 flex fixed" style={{backgroundColor:'rgba(0,0,0,.6)'}}>
            <div className="border border-dark-brighter w-3/4 sm:w-1/2 md:w-1/4 bg-white p-5 self-center mx-auto rounded-md">
                {modalType === 'login' && (
                    <h1 className="text-2xl mb-5">Login</h1>
                )}
                {modalType === 'register' && (
                    <h1 className="text-2xl mb-5">Register</h1>
                )}
                {modalType === 'register' && (
                    <label>
                        <span className="text-sm">Email:</span>
                        <Input type="email" className="mb-3 w-full" value={email} onChange={e => setEmail(e.target.value)}/>
                    </label>
                )}
                <label>
                    <span className="text-sm">Username:</span>
                    <Input type="text" className="mb-3 w-full" value={username} onChange={e => setUsername(e.target.value)}/>
                </label>
                <label>
                    <span className="text-sm">Password:</span>
                    <Input type="password" className="mb-3 w-full" value={password} onChange={e => setPassword(e.target.value)}/>
                </label>
                {modalType === 'login' && (
                    <Button className="w-full mb-3" style={{borderRadius:'.3rem'}}>
                        Log In
                    </Button>
                )}
                {modalType === 'register' && (
                    <Button className="w-full mb-3" style={{borderRadius:'.3rem'}} onClick={e => register(e)}>
                        Sign Up
                    </Button>
                )}
                
                {modalType === 'login' && (
                    <div>
                    Don't have an account? <button className="text-blue-600" onClick={() => setModalType('register')}>Sign Up</button>
                </div>
                )}
                {modalType === 'register' && (
                    <div>
                    Already have an account? <button className="text-blue-600" onClick={() => setModalType('login')}>Log In</button>
                </div>
                )}
                
            </div>
        </div>
    )
}

export default AuthModal;