import { useEffect, useState } from "react"
import ServiceCard from "../ServiceCard/ServiceCard"
import { useLoaderData, useRouteLoaderData } from "react-router-dom"
import axios from "axios"


export default function Services() {
    // export default function Services({ servicesData }) {
    // const servicesLoaderData = useLoaderData()
    // const [services, setServices] = useState(servicesData || servicesLoaderData)
    
    const [services, setServices] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/services')
            .then(res => {
                setServices(res.data)
                console.log(res.data)
            })
    }, [])


    // const {title, img, price} = servicesData;
    // console.log(services)
    return (
        <div className="py-10">
            <h1 className="text-center text-6xl pb-12 font-bold">Our Service Area</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mx-auto w-fit">
                {
                    services?.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>

        </div>
    )
}
