import { ArrowRight } from "lucide-react";
import { Card } from "../ui/Card/Card";
import Button from "../ui/Button/Button";
import { Progress } from "../ui/Progress/Progress";


export default function ActiveGameCard({project}) {
    return (
       <Card>

            <p className="text-sm uppercase tracking-wider text-violet-400">
                Active forge
            </p>

            <h2 className="mt-3 text-3xl font-bold">
               {project.name}
            </h2>

            <p className="mt-4 max-w-2xl text-gray-400 leading-7">
                Ancient puzzle game inspired by Greek mythology.
                Solve mystical mechanisms, unlock forgotten seals
                and uncover the mystery hidden inside Pandora's Box.
            </p>

            <div className="mt-8">

                <Progress value={project.progress}/>
        
            </div>

            <div className="mt-8 flex items-center justify-between">

                <span className="text-sm text-gray-500">
                    Last updated: ${project.updatedAt}
                </span>

                    <Button >
                         Continue
                          <ArrowRight size={18} />
                    </Button>
                

            </div>

     </Card>
    );
}