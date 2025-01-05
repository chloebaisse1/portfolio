import { CalendarSync, LetterText, Paintbrush } from "lucide-react"
import img from "../assets/profil.png"
import Title from "./Title"

const aboutSections = [
  {
    id: 1,
    title: "Développeuse Frontend",
    description: "Je suis une développeuse frontend avec une bonne expérience.",
    icon: <LetterText className="text-primary scale-150" />,
  },
  {
    id: 2,
    title: "Développeuse Backend",
    description:
      "Je maîtrise les bases du développement backend pour créer des APIs robustes.",
    icon: <CalendarSync className="text-primary scale-150" />,
  },
  {
    id: 3,
    title: "Passionnée par l'UI/UX",
    description:
      "Créer des interfaces utilisateur attrayantes et fonctionnelles est ma priorité.",
    icon: <Paintbrush className="text-primary scale-150" />,
  },
]
const About = () => {
  return (
    <div className="bg-base-300 p-10 mb-10 md:mb-32" id="About">
      <Title title="A propos" />
      <div className="md:h-screen flex justify-center items-center">
        <div className="hidden md:block">
          <img
            src={img}
            alt="profil"
            className="w-96 object-cover rounded-xl"
          />
        </div>

        <div className="md:ml-4 space-y-4">
          {aboutSections.map((section) => (
            <div
              key={section.id}
              className="flex flex-col md:flex-row items-center bg-base-100 p-5 rounded-xl md:w-96 shadow-xl"
            >
              <div className="mb-2 md:mb-0">{section.icon}</div>

              <div className="md:ml-4 text-center md:text-left">
                <h2 className="text-xl font-bold mb-1">{section.title}</h2>

                <p className="text-sm">{section.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default About
