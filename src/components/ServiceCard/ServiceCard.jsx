import { Link } from "react-router-dom";
import detailsArrow from '../../assets/icons/arrow-16.png'
import axios from "axios";
import useAuth from "../../hooks/useAuth";


export default function ServiceCard({ service }) {
    const { user } = useAuth()
    console.log(user)
    const handleDetailsbtn = () => {
        // alert("BTN")
        console.log(service)
        // axios.get(`http://localhost:5000/services/${service._id}`, user)
        //     .then(res => {
        //         console.log(res.data)
        //     })
    }
    return (
        <div>
            <div className=" rounded-box border-2 p-6 w-96 space-y-4">
                <h2>
                    <img className="h-48 rounded-box w-full" src={service?.img} alt={service?.title} />
                </h2>
                <h1 className="text-2xl font-bold">Services: {service?.title}</h1>


                <div className="flex justify-between">
                    <h3 className="text-xl text-red-500 font-bold">
                        Price: {service?.price}
                    </h3>
                    <button >
                        {/* <button onClick={() => handleDetailsbtn(service?._id)} className="text-xl text-red-500 font-bold">
                            <img className="w-6" src={detailsArrow} alt="" onClick={handleDetailsbtn} />
                        </button> */}
                        <Link to={`/services/${service?._id}`} className="text-xl text-red-500 font-bold">
                            <img className="w-6" src={detailsArrow} alt="" onClick={handleDetailsbtn} />
                        </Link>
                    </button>
                </div>


            </div>
        </div>
    )
}
