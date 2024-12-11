
import { heroSection } from '../assets'

const Hero = () => {
  return (
    <div>
      <section className="relative h-[100vh]">
        <img src={heroSection} alt="Hero" className="h-full w-full object-cover"/>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white px-6 text-center">
            <h1 className="text-[48px] md:text-[64px] lg:text-[128px] font-extrabold leading-tight lg:leading-[128px] w-full md:w-[80%] lg:w-[70%]">Sekolah Developer Indonesia</h1>
            <p className="text-[16px] md:text-[24px] lg:text-[32px] font-normal mt-6 w-full md:w-[70%] lg:w-[50%]">Menjadi lembaga pendidikan terbaik bertaraf internasional untuk mencetak generasi muda yang profesional, amanah, dan siap bersaing</p>
        </div>
      </section>
    </div>
  )
}

export default Hero
