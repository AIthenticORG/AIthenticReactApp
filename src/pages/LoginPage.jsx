// src/pages/LoginPage.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import beach from '../assets/beach.png';

// stuur cookies mee bij elke request
axios.defaults.withCredentials = true;

const LoginPage = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isRegistering) {
        await axios.post('http://localhost:3000/api/auth/register', {
          username,
          email: email.trim().toLowerCase(),            // normaliseer
          password,
          roll: 0,
        });

        setIsRegistering(false);
        navigate('/');
        window.scrollTo({ top: 0, behavior: 'smooth' });
        window.location.reload();
      } else {
        await axios.post('http://localhost:3000/api/auth/login', {
          email: email.trim().toLowerCase(),             // normaliseer
          password,
        });

        navigate('/');
        window.location.reload();
      }
    } catch (err) {
      console.error('Login/Registratie fout:', err);

      if (err.response?.data?.error) {
        // Toon server-fout (bijv. "Invalid email or password")
        setErrorMessage(err.response.data.error);
      } else if (err.response?.status === 401) {
        setErrorMessage('Email of wachtwoord is onjuist.');
      } else if (err.response?.data?.message) {
        setErrorMessage(err.response.data.message);
      } else {
        setErrorMessage('Er is iets misgegaan. Probeer het opnieuw.');
      }
    }
  };

  return (
    <div className="relative top-[50px] lg:top-[80px] flex flex-col items-center">
      <div className="flex h-[600px] lg:h-[800px] w-full">
        {/* Form side */}
        <div className="flex flex-col items-center justify-center w-full sm:w-1/2 lg:pb-[100px]">
          <div className="flex flex-col w-[80vw] sm:w-auto p-[40px] shadow-md rounded-[20px]">
            <h1 className="text-[42px] font-bold">
              {isRegistering ? 'Create an account' : 'Welcome back!'}
            </h1>
            <p className="text-[25px]">
              {isRegistering
                ? 'Fill in your details to register'
                : 'Enter your credentials to log in'}
            </p>

            <form
              className="flex flex-col gap-[30px] mt-[30px]"
              onSubmit={handleSubmit}
            >
              {isRegistering && (
                <label className="flex flex-col">
                  <p>Username</p>
                  <input
                    className="border border-black pl-2 rounded h-[35px]"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </label>
              )}

              <label className="flex flex-col">
                <p>Email address</p>
                <input
                  className="border border-black pl-2 rounded h-[35px]"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </label>

              <label className="flex flex-col">
                <p>Password</p>
                <input
                  className="border border-black pl-2 rounded h-[35px]"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </label>

              <button
                type="submit"
                className="h-[40px] w-full rounded bg-[#0D5B58] text-white hover:cursor-pointer"
              >
                {isRegistering ? 'Register' : 'Login'}
              </button>

              {errorMessage && (
                <p className="mt-2 text-center text-sm text-red-600">
                  {errorMessage}
                </p>
              )}

              <p className="mt-4 text-center">
                {isRegistering
                  ? 'Already have an account?'
                  : "Don't have an account?"}{' '}
                <button
                  type="button"
                  className="text-[#0D5B58] underline"
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

        {/* Image side */}
        <div className="hidden sm:flex items-center justify-end w-1/2">
          <img
            src={beach}
            alt="beach"
            className="h-[90%] w-[70%] select-none object-cover rounded-tl-[60px] rounded-bl-[60px]"
          />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
