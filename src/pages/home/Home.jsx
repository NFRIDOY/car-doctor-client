import { useLoaderData } from "react-router-dom";
import Services from "../../components/Services/Services";
import { useContext } from "react";
// import Footer from "../../components/Footer/Footer";


export default function Home() {
  const servicesData = useLoaderData()
  console.log(servicesData)
  return (
    <div>
      <h1></h1>
      <Services servicesData={servicesData}></Services>
      {/* <Footer servicesData={servicesData}></Footer> */}
      
    </div>
  )
}
