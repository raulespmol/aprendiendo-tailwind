import {Footer, Hero, Highlights, Offers, Products, Reviews, Services, Subscription} from './sections'
import { Nav } from './components'

const App = () => {
  return (
    <main className='relative'>
      <Nav />
      <section className='xl:padding-1 wide:padding-r padding-b'>
        <Hero />
      </section>
      <section className='padding'>
        <Products />
      </section>
      <section className='padding'>
        <Highlights />
      </section>
      <section className='padding'>
        <Services />
      </section>
      <section className='padding'>
        <Offers />
      </section>
      <section className='padding bg-pale-blue'>
        <Reviews />
      </section>
      <section className='padding-x sm:py-32 py-16 w-full'>
        <Subscription />
      </section>
      <section className='bg-black padding-x padding-t pb-8'>
        <Footer />
      </section>
    </main>
  )
}

export default App