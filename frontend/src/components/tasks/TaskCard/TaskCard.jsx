import { Card } from "../../ui/Card/Card";
import Button from "../../ui/Button/Button";
import { Badge } from "../../ui/Badge/Badge";
import { getGames } from "../../../services/gameServices";

export function TaskCard({ task, onOpen }) {
    return (
        <Card className="flex flex-col">

            {/* Content */}

            <div className="mt-5 flex-1">

                <h3 className="text-lg font-semibold text-white">

                    {task.name}

                </h3>

                <p className="mt-2 text-sm text-slate-400">

                    {task.description}

                </p>

            </div>

            {/* Meta */}

            <div className="mt-4 flex flex-wrap gap-2">

                 <Badge>
                    {task.forge?.name ?? ""}
                </Badge>


                <Badge>

                    {task.priority}

                </Badge>

                <Badge>

                    {task.status}

                </Badge>

               
            </div>

            {/* Actions */}

            <Button
                className="mt-6 w-full"
                onClick={() => onOpen(task)}
            >
                Open Task
            </Button>

        </Card>
    );

}