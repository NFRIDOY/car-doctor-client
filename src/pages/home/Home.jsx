import { useLoaderData } from "react-router-dom";
import Services from "../../components/Services/Services";
// import Footer from "../../components/Footer/Footer";


export default function Home() {

  const servicesData = useLoaderData()
  console.log(servicesData)
  return (
    <div>
      
      <Services servicesData={servicesData}></Services>
      {/* <Footer servicesData={servicesData}></Footer> */}
      
    </div>
  )
}
