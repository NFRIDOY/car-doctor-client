import { useLoaderData } from "react-router-dom";
import Services from "../../components/Services/Services";


export default function Home() {

  const servicesData = useLoaderData()
  console.log(servicesData)
  return (
    <div>
      
      <Services servicesData={servicesData}></Services>
    </div>
  )
}
