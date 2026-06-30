import { Card } from "../../ui/Card/Card"
import { GameStatus } from "../GameStatus/index"
import { GameProgress } from "../GameProgress/index"
import Button from "../../ui/Button/Button"

export function GameCard({game,onOpen}) {
    return(
        <Card>
             <div className="mb-6">

            <h2 className="text-2xl font-bold">
                {game.name}
            </h2>

            <p className="mt-2 text-gray-400">
                {game.description}
            </p>

        </div>

            <GameStatus status={game.status}/>

            <GameProgress  progress={game.progress}/>

            <Button onClick={() => onOpen(game)}>
               Continue
            </Button>

        </Card>
    )
}