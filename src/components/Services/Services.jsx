import { useState } from "react"
import ServiceCard from "../ServiceCard/ServiceCard"
import { useLoaderData, useRouteLoaderData } from "react-router-dom"


export default function Services({ servicesData }) {

    const servicesLoaderData = useLoaderData()
    const [services, setServices] = useState(servicesData || servicesLoaderData)
    // const {title, img, price} = servicesData;
    console.log(services)
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
