import ServiceCard from "../ServiceCard/ServiceCard"


export default function Services({ servicesData }) {

    // const {title, img, price} = servicesData;
    console.log(servicesData)
    return (
        <div>
            <h1 className="text-center text-6xl pb-12 font-bold">Our Service Area</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mx-auto w-fit">
                {
                    servicesData?.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>

        </div>
    )
}
