import teamPic1 from '../../../../assets/images/team/1.jpg';
import teamPic2 from '../../../../assets/images/team/2.jpg';
import teamPic3 from '../../../../assets/images/team/3.jpg';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
const Teams = () => {

    return (

        <div className='space-y-6 mt-8'>
            <div className="text-center">
                <h3 className="text-4xl font-bold text-orange-600">Team</h3>
                <h3 className='text-3xl'>Our Team Area</h3>
                <p>The majority have suffered alteration in some form, by injected humour, or randomised <br></br> words which do not look even slightly believable.  </p>

            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {/* single team */}
                <div className="card glass h-96">
                    <figure className="mx-auto w-72 h-72"><img src={teamPic1} alt="car!" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Car Engine Plug</h2>
                        <p>Engine Expert</p>
                        <div className="card-actions justify-start space-x-4">
                            <FaFacebook></FaFacebook>
                            <FaTwitter></FaTwitter>
                            <FaLinkedin></FaLinkedin>
                            <FaInstagram></FaInstagram>
                        </div>
                    </div>

                </div>
                {/* single team */}
                <div className="card glass h-96">
                    <figure className="mx-auto w-72 h-72"><img src={teamPic2} alt="car!" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Car Engine Plug</h2>
                        <p>Engine Expert</p>
                        <div className="card-actions justify-start space-x-4">
                            <FaFacebook></FaFacebook>
                            <FaTwitter></FaTwitter>
                            <FaLinkedin></FaLinkedin>
                            <FaInstagram></FaInstagram>
                        </div>
                    </div>

                </div>
                {/* single team */}
                <div className="card glass h-96">
                    <figure className="mx-auto w-72 h-72"><img src={teamPic3} alt="car!" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Car Engine Plug</h2>
                        <p>Engine Expert</p>
                        <div className="card-actions justify-start space-x-4">
                            <FaFacebook></FaFacebook>
                            <FaTwitter></FaTwitter>
                            <FaLinkedin></FaLinkedin>
                            <FaInstagram></FaInstagram>
                        </div>
                    </div>

                </div>

            </div>
        </div>


    );
};

export default Teams;