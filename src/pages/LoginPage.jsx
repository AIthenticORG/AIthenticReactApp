import loginImage from '../assets/achtergrondPNG.jpg';
import beach from '../assets/beach.png';

const LoginPage = () => {
    return(
        <div className="w-[100%] h-auto top-[50px] lg:top-[80px] relative flex flex-col items-center justify-center">
            <div className="w-full h-[600px] lg:h-[800px] flex flex-row">
                <div className="w-full sm:w-1/2 h-full flex flex-col justify-center items-center lg:pb-[100px]">
                    <div className='flex flex-col w-[80vw] shadow-md p-10 sm:w-auto  h-auto sm:ml-[20px] lg:ml-[40px] rounded-[20px]'>
                        <h1 className='font-bold text-[42px]'>Welcome back!</h1>
                        <p className='text-[25px]'>Enter your credentials to enter your account</p>
                        <form className='w-full gap-[20px] flex flex-col mt-[30px]'>
                            <label>
                                <p>
                                    Email address    
                                </p> 
                                <input
                                    className='border-[1px] border-black py-[3px] rounded-[10px] w-full'
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
                                    className='border-[1px] border-black py-[3px] rounded-[10px] w-full'
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
                </div>
                <div className="hidden w-1/2 h-full sm:flex flex-col sm:items-end sm:justify-center sm:block">
                    <img src={beach} className='h-[90%] w-[70%] object-cover rounded-tl-[60px] rounded-bl-[60px] relative'></img>
                </div>
            </div>
            <div className='w-full h-[300px] bg-[#1BB1AB] flex justify-center items-center'>

            </div>

        </div>
    )
}
export default LoginPage;