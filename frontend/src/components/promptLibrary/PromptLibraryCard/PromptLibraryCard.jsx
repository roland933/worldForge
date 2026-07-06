

import { Card } from "../../ui/Card/Card";
import Button from "../../ui/Button/Button";
import { Badge } from "../../ui/Badge/Badge";
import { getGames } from "../../../services/forgeServices";
import { ButtonVariants } from "../../ui/Button/buttonVariants";

export function PromptLibraryCard({ prompt, onOpen }) {
    return (
        <Card className="flex flex-col">

            {/* Content */}

            <div className="mt-5 flex-1">

                <h3 className="text-lg font-semibold text-white">

                    {prompt.title}

                </h3>

                <p className="mt-2 text-sm text-slate-400">

                    {prompt.prompt}

                </p>

            </div>

            {/* Meta */}

            <div className="mt-4 flex flex-wrap gap-2">

                 <Badge>
                    {prompt.category}

                </Badge>

            </div>

            {/* Actions */}

           
        <div className="flex gap-2">
             <Button
              
                className="mt-6 w-40"
                
            >
                Copy prompt
            </Button>
            <Button
                className="mt-6 w-40"
                onClick={() => onOpen(prompt)}
            >
                Manage prompt
            </Button>
        </div>
        </Card>
    );

}