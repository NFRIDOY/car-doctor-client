import { useLoaderData } from "react-router-dom"


export default function ServiceDetails() {

    const ServiceDetailsData = useLoaderData()

    const { _id, service_id, title, img, price, description, facility } = ServiceDetailsData
    // const { name, details } = facility
    return (
        <div>
            <div className="flex justify-evenly my-12">
                <div>
                    <div className="hero">
                        <div className="hero-content text-center">
                            <div className="max-w-md flex flex-col text-left">
                                <h1 className="text-5xl font-bold">{title}</h1>
                                <p className="py-6">
                                    {description}
                                </p>
                                <p className="py-6 text-3xl font-bold" >
                                    Price: <span className="text-red-500 text-3xl font-extrabold">৳</span><span className="text-red-500 "> {price}</span>
                                </p>
                                <button className="btn btn-error text-white">Book Now</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="">
                    <img className=" rounded-lg shadow-2xl" src={img} alt="" />
                </div>
            </div>
            {/* <div className="hero min-h-screen bg-base-200">
                
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold text-orange-800">{title}</h1>
                        <p className="py-6 text-orange-800">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary text-orange-800">Get Started</button>
                    </div>
                </div>
            </div> */}
        </div>
    )
}
