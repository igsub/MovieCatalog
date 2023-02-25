import { CreditCast } from "../shared/interfaces/creditCast"
import BlanckProfilePicture from "../assets/blank-profile.png"

interface ICreditCastCard {
  cast: CreditCast
}

const CastCard = ({ cast }: ICreditCastCard) => {
  const imgPath = cast.profile_path ? `${import.meta.env.VITE_IMAGE_BASE_URL}w500${cast.profile_path}` : BlanckProfilePicture

  return (
    <div className="h-82 w-44 p-1 m-1 max-w-sm rounded overflow-hidden shadow-md transform transition duration-300 hover:scale-105 bg-white">
        <img className="w-44 h-64" src={imgPath} alt={cast.name} />
      <div>
        <div className="px-2 py-2">
          <div className="font-bold text-md mb-2 text-ellipsis overflow-hidden whitespace-nowrap">{cast.name}</div>
          <p className="text-gray-700 text-sm">
            {cast.character}
          </p>
        </div>
      </div>
    </div>
  )
}

export default CastCard