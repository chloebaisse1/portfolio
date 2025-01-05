import { Mail } from "lucide-react"
import img from "../assets/profil.png"

const Home = () => {
  return (
    <div
      className="flex flex-col-reverse md:flex-row justify-center items-center md:my-32 my-10"
      id="Home"
    >
      <div className="flex flex-col">
        <h1 className="text-5xl md:text-6xl font-bold text-center md:text-left mt-4 md:mt-0">
          Bonjour, <br /> je suis <span className="text-primary">ChloeDev</span>
        </h1>

        <p className="my-4 text-md text-center md:text-left">
          Je suis une developpeuse fullstack. <br /> Tout juste diplomée, mais
          passionnée par de nombreuses technologies. <br />
          Contactez-moi si vous avez besoin de mes services
        </p>
        <a href="" className="btn btn-primary md:w-fit">
          <Mail className="w-5 h-5" />
          Contactez-moi
        </a>
      </div>

      <div className="md:ml-60">
        <img
          src={img}
          alt="profil"
          className="w-96 h-96 object-cover border-8 border-secondary shadow-xl"
          style={{ borderRadius: "7% 93% 22% 78% / 62% 30% 70% 38% " }}
        />
      </div>
    </div>
  )
}

export default Home
