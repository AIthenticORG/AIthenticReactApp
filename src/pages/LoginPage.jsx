import beach from '../assets/beach.png';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

axios.defaults.withCredentials = true;

const LoginPage = () => {
    const [isRegistering, setIsRegistering] = useState(false);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const roll = 0;
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (isRegistering) {
                await axios.post('http://localhost:3000/api/auth/register', {
                    username,
                    email,
                    password,
                    roll
                });

                setIsRegistering(false);
                navigate('../');
                window.scrollTo({ top: 0, behavior: 'smooth' });
                window.location.reload();
            } else {
                await axios.post('http://localhost:3000/api/auth/login', {
                    email,
                    password
                });

                navigate('../');
                window.location.reload();
            }
        } catch (err) {
            console.error('Login/Registratie fout:', err);
            if (err.response && err.response.status === 401) {
                setErrorMessage('Email of wachtwoord is onjuist.');
            } else if (err.response && err.response.data && err.response.data.message) {
                setErrorMessage(err.response.data.message);
            } else {
                setErrorMessage('Er is iets misgegaan. Probeer het opnieuw.');
            }
        }
    };

    return (
        <div className="w-full h-auto top-[50px] lg:top-[80px] relative flex flex-col items-center justify-center">
            <div className="w-full h-[600px] lg:h-[800px] flex flex-row">
                <div className="w-full sm:w-1/2 h-full flex flex-col justify-center items-center lg:pb-[100px]">
                    <div className='flex flex-col w-[80vw] shadow-md p-[40px] sm:w-auto h-auto sm:ml-[20px] lg:ml-[40px] rounded-[20px]'>
                        <h1 className='font-bold text-[42px]'>
                            {isRegistering ? 'Create an account' : 'Welcome back!'}
                        </h1>
                        <p className='text-[25px]'>
                            {isRegistering ? 'Fill in your details to register' : 'Enter your credentials to log in'}
                        </p>

                        <form className='w-full gap-[30px] flex flex-col mt-[30px]' onSubmit={handleSubmit}>
                            {isRegistering && (
                                <label>
                                    <p>Username</p>
                                    <input
                                        className='border border-black pl-2 rounded w-full h-[35px]'
                                        type="text"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        required
                                    />
                                </label>
                            )}

                            <label>
                                <p>Email address</p>
                                <input
                                    className='border border-black pl-2 rounded w-full h-[35px]'
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </label>

                            <label>
                                <p>Password</p>
                                <input
                                    className='border border-black pl-2 rounded w-full h-[35px]'
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </label>

                            <button
                                type="submit"
                                className='w-full h-[40px] bg-[#0D5B58] text-white rounded hover:cursor-pointer'
                            >
                                {isRegistering ? 'Register' : 'Login'}
                            </button>

                            {errorMessage && (
                                <p className="text-red-600 text-sm text-center mt-2">{errorMessage}</p>
                            )}

                            <p className='text-center mt-4'>
                                {isRegistering ? 'Already have an account?' : "Don't have an account?"}{' '}
                                <button
                                    type="button"
                                    className='text-[#0D5B58] underline'
                                    onClick={() => {
                                        setIsRegistering(!isRegistering);
                                        setErrorMessage('');
                                    }}
                                >
                                    {isRegistering ? 'Login here' : 'Register here'}
                                </button>
                            </p>
                        </form>
                    </div>
                </div>

                <div className="hidden w-1/2 h-full sm:flex items-end justify-center">
                    <img src={beach} alt="beach" className='select-none h-[90%] w-[70%] object-cover rounded-tl-[60px] rounded-bl-[60px]' />
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
