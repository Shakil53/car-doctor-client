import { Link } from 'react-router-dom';
import loginSideImg from '../../assets/images/login/login.svg';
import { useContext } from 'react';
import { AuthContex } from '../../Contex/AuthProvider';

const
    Login = () => {

        const { signIn } = useContext(AuthContex)


        const handleLogin = (event) => {
            event.preventDefault();
            const form = event.target;
            const email = form.email.value;
            const password = form.password.value;
            console.log(email, password)

            signIn(email, password)
                .then(result => {
                    const user = result.user;
                    console.log(user)
                })
                .catch(error => console.log(error))
        }
        return (
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left mr-36">
                        <img src={loginSideImg}></img>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                        <div className="card-body">
                            <h1 className="text-4xl font-bold">Login</h1>
                            <form onSubmit={handleLogin}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" name='email' placeholder="Enter your email" required className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="Enter your password" required className="input input-bordered" />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <input className="btn bg-[#FF3811] text-[#FFFFFF]" type='submit' value='LOGIN'></input>
                                </div>
                            </form>
                        </div>

                        <p className='my-8 text-center text-sm'>New to Car Doctors? <Link className='text-orange-600 font-bold' to='/Signup'>Sign up</Link></p>
                    </div>
                </div>
            </div>
        );
    };

export default Login;