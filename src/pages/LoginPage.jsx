import loginImage from '../assets/achtergrondPNG.jpg'; // Afbeelding voor achtergrond (niet gebruikt in de code)
import beach from '../assets/beach.png'; // Afbeelding van het strand aan de rechterkant
import { useState } from 'react'; // React hook voor het beheren van de staat
import { Link } from 'react-router-dom'; // Link voor navigatie naar andere pagina's

const LoginPage = () => {
    const [email, setEmail] = useState(); // Staat voor emailinvoer
    const [password, setPassword] = useState(); // Staat voor wachtwoordinvoer

    return(
        <div className="w-[100%] h-auto top-[50px] lg:top-[80px] relative flex flex-col items-center justify-center">
            <div className="w-full h-[600px] lg:h-[800px] flex flex-row">
                {/* Links gedeelte voor het login formulier */}
                <div className="w-full sm:w-1/2 h-full flex flex-col justify-center items-center lg:pb-[100px]">
                    <div className='flex flex-col w-[80vw] shadow-md p-[40px] sm:w-auto h-auto sm:ml-[20px] lg:ml-[40px] rounded-[20px]'>
                        <h1 className='font-bold text-[42px]'>Welcome back!</h1> {/* Welkomstbericht */}
                        <p className='text-[25px]'>Enter your credentials to enter your account</p> {/* Instructies voor de gebruiker */}
                        
                        {/* Formulier voor login */}
                        <form className='w-full gap-[30px] flex flex-col mt-[30px]  md:mt-[80px]'>
                            {/* Email invoer */}
                            <label>
                                <p>
                                    Email address    
                                </p> 
                                <input
                                    className='border-[1px] border-black pl-[10px] rounded-[10px] w-full h-[35px] placeholder:pl-[7px]'
                                    type="email"
                                    name="email"
                                    placeholder='Email address'
                                    onChange={(e) => setEmail(e.target.value)} // Update email state
                                    required 
                                />
                            </label>                
                            {/* Wachtwoord invoer en link naar wachtwoord vergeten */}
                            <label>
                                <div className='flex justify-between flex-row'>
                                    <p>
                                        Password   
                                    </p> 
                                    <Link to='/forgot-password'>
                                        <button className='text-[#0D5B58] hover:cursor-pointer'>
                                            Forgot password?
                                        </button>
                                    </Link>
                                </div>
                                <input
                                    className='border-[1px] border-black pl-[10px] rounded-[10px] w-full h-[35px] placeholder:pl-[7px]'
                                    type="password"
                                    name="password"
                                    placeholder='Password'
                                    onChange={(e) => setPassword(e.target.value)} // Update password state
                                    required 
                                />
                            </label>
                            {/* Checkbox voor "Onthoud mij" */}
                            <label className='flex flex-row items-start gap-x-[10px]'>
                                <input
                                    className='w-[20px] h-[20px] mt-[10px]'
                                    type="checkbox"
                                    name="rememberMe"  
                                />
                                <span className='text-[15px] translate-y-[40%]'>Remember me for 30 days</span> 
                            </label>
                            {/* Inlogknop */}
                            <button className='w-full h-[40px] bg-[#0D5B58] mt-[0px] sm:mt-[20px] text-white rounded-[10px] hover:cursor-pointer' type='submit'
                            onClick={(e) => {
                                e.preventDefault(); // Voorkomt het standaard formulier verzenden
                                console.log
                                (`Email: ${email} Password: ${password}`); // Toont de ingevulde gegevens in de console
                            }}
                            > 
                                Login
                            </button>
                        </form>
                    </div>
                </div>
                {/* Rechter gedeelte van de pagina met afbeelding */}
                <div className="hidden w-1/2 h-full sm:flex flex-col sm:items-end sm:justify-center sm:block">
                    <img src={beach} draggable='false' className='select-none h-[90%] w-[70%] object-cover rounded-tl-[60px] rounded-bl-[60px] relative'></img> {/* Afbeelding van het strand */}
                </div>
            </div>
        </div>
    )
}
export default LoginPage;
