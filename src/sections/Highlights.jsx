import { arrowRight } from "../assets/icons"
import { shoe8 } from "../assets/images"
import { Button } from "../components"

const Highlights = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"  
    >
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          La 
          <span className="text-coral-red"> mejor calidad </span> 
          en Zapatillas
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Garantizando comodidad y estilo premium, nuestro calzado meticulosamente elaborado está diseñado para elevar tu experiencia, ofreciéndote una calidad inigualable, innovación y un toque de elegancia.
        </p>
        <p className="mt-4 lg:max-w-lg info-text">
          Nuestra dedicación al detalle y excelencia asegura tu satisfacción.
        </p>
        <div className="mt-11">
          <Button
            label={"Ver detalles"}
          />
        </div>
      </div>

      <div className="flex flex-1 justify-center items-center">
        <img 
          src={shoe8} 
          alt="shoe8"
          width={570}
          className="object-contain" 
        />
      </div>
    </section>
  )
}

export default Highlights