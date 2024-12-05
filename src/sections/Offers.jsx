import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import { Button } from "../components"

const Offers = () => {
  return (
    <section className="flex flex-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img 
          src={offer} 
          width={773}
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          Oferta
          <span className="text-coral-red"> Especial </span>
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Emprende un viaje de compras que redefine tu experiencia con ofertas inigualables. Desde selecciones de primera hasta ahorros increíbles, ofrecemos un valor sin igual que nos distingue.
        </p>
        <p className="mt-4 lg:max-w-lg info-text">
          Navega por un reino de posibilidades diseñado para cumplir tus deseos únicos, superando las más altas expectativas. Tu experiencia con nosotros es simplemente excepcional.
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button
            icon={arrowRight}
            label={"Comprar ahora"}
          />
          <Button
            label={"Saber más"}
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
          />
        </div>
      </div>
    </section>
  )
}

export default Offers