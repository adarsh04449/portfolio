import BallCanvas from "./Canvas/BallCanvas"
import { technologies } from "../constants"

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10 my-6">
      {technologies.map((technology) => (
          <div className = "w-28 h-28" key={technology.name}>
          <BallCanvas icon = {technology.icon} />
          <p className="text-secondary text-center mt-2 text-gray-200">{technology.name}</p>
          </div>
      ))}
    </div>
  )
}

export default Tech;