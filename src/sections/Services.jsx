import ServiceCard from "../components/ServiceCard"
import { services } from "../constants"

const Services = () => {
  return (
    <section className="max-container flex flex-wrap justify-center items-center gap-10">
      {services.map(service => (
        <ServiceCard 
          key={service.label}
          {...service}
        />
      ))}
    </section>
  )
}

export default Services