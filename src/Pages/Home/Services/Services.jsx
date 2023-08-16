import { useState } from "react";
import { useEffect } from "react";
import ServicesCard from "./ServicesCard";

const Services = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className="space-y-5">
            <div className="text-center">
                <h3 className="text-4xl font-bold text-orange-600">Services</h3>
                <h3 className='text-3xl'>Our Services Area</h3>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br></br> words which do not look even slightly believable. </p>

            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    services.map(service => <ServicesCard
                        key={service._id}
                        service={service}
                    ></ServicesCard>)
                }
            </div>
            <div className="ml-[50%]">
                <button className=" btn btn-active btn-secondary">More Services</button>
            </div>
        </div>
    );
};

export default Services;