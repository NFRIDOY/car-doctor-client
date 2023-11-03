import { data } from "autoprefixer"
import axios from "axios"
import { useEffect, useState } from "react"
import { useLoaderData, useParams } from "react-router-dom"
import useAuth from "../../hooks/useAuth"


export default function ServiceDetails() {

    // const ServiceDetailsData = useLoaderData()

    const [ServiceDetailsData, setServiceDetailsData] = useState({})

    const {user} = useAuth();

    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:5000/services/${id}`)
        .then(res => {
            console.log(res.data)
            setServiceDetailsData(res.data)
        })
    },[])

    const { _id, service_id, title, img, price, description, facility } = ServiceDetailsData
    // const { name, details } = facility
    // const userEmail = user?.email;
    const bookedData ={  user, product_id:_id, service_id, title, img, price, description, facility }
    const handleBookNow = () =>{
        // alert(_id)
        // alert(title)
        console.log(bookedData)
        
        // fetch("http://localhost:5000/cart", {
        //     method: "POST",
        //     headers: {
        //         "Content-type": "application/json",
        //     },
        //     body: JSON.stringify(ServiceDetailsData)

        // })
        // .then(res => res.json())
        // .then(data => {
        //     console.log(data)
        // })

        axios.post("http://localhost:5000/cart", bookedData)
        .then (res => {
            console.log(res)
            console.log(res.data)
            res.data.insertedId ? alert("Added To Cart") : alert("Added To Cart Fails")
        })
        // .catch(err => {
        //     console.log(err)
        // })
    }
    return (
        <div>
            <div className="flex justify-evenly my-12 mx-12">
                <div className="w-1/2">
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
                                <button className="btn btn-error text-white" onClick={handleBookNow}>Book Now</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-1/2">
                    <img className="object-fill h-full rounded-lg shadow-2xl" src={img} alt="" />
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
