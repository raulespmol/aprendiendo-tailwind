import { PopularProductCard } from "../components"
import { products } from "../constants"

const Products = () => {
  return (
    <section
      id="products"
      className="max-container max-sm:mt-12"
    >
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold">
          Productos <span className="text-coral-red">Populares</span>
        </h2>
        <p className="lg:max-w-lg nt-2 font-montserrat text-slate-gray">Experimenta lo mejor en calidad y diseño con nuestras cotizadas selecciones. Descubre un mundo de confort, diseño y valor. </p>
      </div>

      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
        {products.map(product => (
          <PopularProductCard 
            key={product.name}
            {...product}
          />
        ))}
      </div>
    </section>
  )
}

export default Products