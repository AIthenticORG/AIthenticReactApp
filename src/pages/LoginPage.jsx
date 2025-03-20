import loginImage from '../assets/achtergrondPNG.jpg';

const LoginPage = () => {
    return(
        <div className="w-[100%] h-auto top-[50px] lg:top-[80px] relative flex flex-col items-center justify-center">
            <div className="w-full h-[500px] lg:h-[800px] flex flex-row">
                <div className="w-1/2 h-full flex flex-col justify-center pl-[30px]">
                    <h1 className='font-bold text-[26px]'>Welcome back!</h1>
                    <p>Enter your credentials to enter your account</p>
                    <form className='w-[250px] gap-[20px] flex flex-col mt-[30px]'>
                        <label>
                            <p>
                                Email address    
                            </p> 
                            <input
                                className='border-[1px] border-blac rounded-[10px] w-full'
                                type="email"
                                name="email"
                                placeholder='Email address'
                                required 
                            
                            />
                        </label>
                        <label>
                            <p>
                                Password   
                            </p> 
                            <input
                                className='border-[1px] border-black rounded-[10px] w-full'
                                type="password"
                                name="password"
                                placeholder='password'
                                required 
                            
                            />
                        </label>
                        <button className='w-full h-[30px] bg-[#0D5B58] text-white rounded-[10px] hover:cursor-pointer' type='submit'> 
                            Login
                        </button>
                    </form>


                </div>
                <div className="w-1/2 h-full flex flex-col items-end justify-center">
                    <img src={loginImage} className='h-[90%] w-[70%] object-cover rounded-tl-2xl rounded-bl-2xl relative'></img>
                </div>
            </div>

        </div>
    )
}
export default LoginPage;