import {
    Home,
    FolderOpen,
    CheckSquare,
    Image,
    NotebookPen,
    Sparkles,
    Settings,
    Hammer,
    User
} from "lucide-react";
import { WorldForgeRoutes } from "../routes/routes";
export const Menu = [
    {
        title: "My forge",
        icon: Home,
        path: WorldForgeRoutes.DASHBOARD
    },
    {
        title: "Worlds",
        icon: FolderOpen,
        path: WorldForgeRoutes.GAMES
    },
    {
        title: "Tasks",
        icon: CheckSquare,
         path: WorldForgeRoutes.TASKS
    },
    {
        title: "Assets",
        icon: Image,
        path: WorldForgeRoutes.ASSETS
    },
    {
        title: "Notes",
        icon: NotebookPen,
       path: WorldForgeRoutes.NOTES
    },
    {
        title: "Prompt Library",
        icon: Sparkles,
        path: WorldForgeRoutes.PROMPT_LIBRARY
    },
];