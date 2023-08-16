import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'
const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className='lg:w-1/2 relative'>
                    <img src={person} className="w-3/2 rounded-lg shadow-2xl" />
                    <img src={parts} className="w-[55%] absolute rounded-lg -right-[15%] top-[65%]  border-8 border-white shadow-2xl" />
                </div>
                <div className='ml-20'>
                    <h1 className="text-5xl text-orange-500 font-bold">About Us</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default About;