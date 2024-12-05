import { ReviewCard } from "../components"
import { reviews } from "../constants"

const Reviews = () => {
  return (
    <section className="max-container">
      <h3 className="font-palanquin text-center text-4xl font-bold"> 
        Qué opinan nuestros
        <span className="text-coral-red "> Clientes </span>
      </h3>
      <p className="info-text m-auto mt-4 max-w-lg text-center">
        Revisa historias genuinas de nuestros clientes satisfechos acerca de sus experiencias con nosotros.
      </p>
      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        {reviews.map(review => (
          <ReviewCard 
            key={review.customerName}
            {...review}
          />
        ))}
      </div>

    </section>
  )
}

export default Reviews