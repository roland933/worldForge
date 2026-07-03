import { Card } from "../../ui/Card/Card";
import Button from "../../ui/Button/Button";
import { Badge } from "../../ui/Badge/Badge";

export function NoteCard({ note, onOpen }) {
    return (
        <Card className="flex flex-col">

            {/* Content */}

            <div className="mt-5 flex-1">

                <h3 className="text-lg font-semibold text-white">

                    {note.title}

                </h3>

                <p className="mt-2 text-sm text-slate-400">
                    {note.content}
                </p>

            </div>

            {/* Meta */}

            <div className="mt-4 flex flex-wrap gap-2">

                 <Badge>
                    {note.forge?.name ?? ""}
                </Badge>
            </div>

            {/* Actions */}

            <Button
                className="mt-6 w-full"
                onClick={() => onOpen(note)}
            >
                Open Note
            </Button>

        </Card>
    );

}