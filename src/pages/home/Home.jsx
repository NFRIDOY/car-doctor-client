import { useLoaderData } from "react-router-dom";
import Services from "../../components/Services/Services";


export default function Home() {

  const servicesData = useLoaderData()

  return (
    <div>
      Home Page
      <h1 className="text-center">Our Service Area</h1>
      <Services servicesData={servicesData}></Services>
    </div>
  )
}
