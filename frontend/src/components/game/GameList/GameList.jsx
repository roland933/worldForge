import { getGame } from "../../../services/gameServices";
import { GameCard } from "../GameCard/GameCard";

export function GameList({games}) {
    
    return(
         <div className="grid grid-cols-4 gap-6">
        {games.map(game => (
              <GameCard game={game} key={game.id} />

        ))}

        </div>

    )

}