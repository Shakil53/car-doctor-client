import { FaCalendarAlt, FaPhoneAlt, FaMapMarkedAlt } from "react-icons/fa";
const Contact = () => {
    return (
        <div className="flex flex-col w-full lg:flex-row mt-8 mb-8">
            <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">
                <div className="flex space-x-3">
                    <FaCalendarAlt className="w-10 h-10"></FaCalendarAlt>
                    <div>
                        <h2 className="text-sm font-bold">We are open Monday-Friday</h2>
                        <h2 className="text-lg font-bold">7.00 am - 10.00 pm</h2>

                    </div>
                </div>

            </div>
            <div className="divider lg:divider-horizontal"></div>
            <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">
                <div className="flex space-x-3">
                    <FaPhoneAlt className="w-10 h-10"></FaPhoneAlt>
                    <div>
                        <h2 className="text-sm font-bold">Have any Question?</h2>
                        <h2 className="text-lg font-bold">+2564 2546 125</h2>

                    </div>
                </div>
            </div>
            <div className="divider lg:divider-horizontal"></div>
            <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">
                <div className="flex space-x-3">
                    <FaMapMarkedAlt className="w-10 h-10"></FaMapMarkedAlt>
                    <div>
                        <h2 className="text-sm font-bold">Need a repair? your address</h2>
                        <h2 className="text-lg font-bold">+2564 2546 125</h2>

                    </div>
                </div>
            </div>
        </div>

    );
};

export default Contact;