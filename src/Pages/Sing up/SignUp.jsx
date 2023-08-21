import signupImg from '../../assets/images/login/login.svg'
import { Link } from 'react-router-dom';

const SignUp = () => {
    const handleSignUp = (event) => {
        event.preventDefault()
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left mr-36">
                    <img src={signupImg}></img>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onClick={handleSignUp}>
                        <div className="card-body">
                            <h1 className="text-4xl font-bold">Sign Up</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Enter your email" required className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="Email" placeholder="Enter your email" required className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="Enter your password" required className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn bg-[#FF3811] text-[#FFFFFF]" type='submit' value='Login'></input>
                            </div>
                        </div>
                    </form>
                    <p className='my-2 text-center text-sm'>Have an accout? <Link className='text-orange-600 font-bold' to='/Login'>Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;