import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContex } from "../../Contex/AuthProvider";
import toast, { Toaster } from "react-hot-toast";

const Checkout = () => {
    const service = useLoaderData();
    const { user } = useContext(AuthContex)


    const { title, _id, img, price, details, description } = service;


    const handleForm = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = user?.email;
        const phone = form.phone.value;
        const date = form.date.value;
        const data = form.data.value;

        const booking = {
            coustomer: name,
            serviceName: title,
            service_id: _id,
            img,
            email,
            date,
            price,
            phone,
            data
        }
        console.log(booking)


        fetch(`http://localhost:5000/bookings`, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    toast.success('service booking successfully')

                }
            })
    }


    return (<>
        <h2 className="text-3xl font-[mooli] font-bold text-center">Book Service:{service.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 mb-10 mt-8 items-center justify-center">
            <div className="card w-2/3 bg-base-100 shadow-xl mx-auto ">
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>Price: ${price}</p>
                </div>
                <figure><img src={img} alt="Shoes" /></figure>
            </div>
            <form onSubmit={handleForm} className="grid grid-cols-2  gap-3">
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Customer Name: </span>
                    </label>
                    <input name="name" type="text" defaultValue={user?.displayName} placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Date: </span>
                    </label>
                    <input type="date" name="date" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Phone Number: </span>
                    </label>
                    <input type="text" name="phone" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Email: </span>
                    </label>
                    <input type="text" name="email" defaultValue={user?.email} placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Your bio</span>
                    </label>
                    <textarea name="data" className="textarea textarea-bordered h-24" placeholder="booking issue"></textarea>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Due Amount: </span>
                    </label>
                    <input type="number" name="price" defaultValue={price} placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </div>
                <div>

                    <input type="submit" value={'submit'} className="btn btn-outline w-96 md:w-[650px] max-w-2xl"></input>
                </div>
            </form>

        </div>
    </>
    );
};

export default Checkout;