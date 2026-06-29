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

const menu = [
    {
        title: "Dashboard",
        icon: Home,
        active: true,
    },
    {
        title: "Projects",
        icon: FolderOpen,
    },
    {
        title: "Tasks",
        icon: CheckSquare,
    },
    {
        title: "Assets",
        icon: Image,
    },
    {
        title: "Notes",
        icon: NotebookPen,
    },
    {
        title: "Prompt Library",
        icon: Sparkles,
    },
];

export default function Sidebar() {
    return (
        <aside className="w-72 bg-[#151922] border-r border-[#242938] flex flex-col">

            {/* Logo */}

            <div className="px-6 py-8">

                <div className="flex items-center gap-3">

                    <div className="w-12 h-12 rounded-xl bg-violet-600 flex items-center justify-center">

                        <Hammer size={22} />

                    </div>

                    <div>

                        <h1 className="font-bold text-lg">
                            World Forge
                        </h1>

                        <p className="text-sm text-gray-400">
                            Game Development Hub
                        </p>

                    </div>

                </div>

            </div>

            {/* Navigation */}

            <nav className="flex-1 px-4">

                {menu.map((item) => {

                    const Icon = item.icon;

                    return (

                        <button
                            key={item.title}
                            className={`w-full flex items-center gap-3 rounded-xl px-4 py-3 mb-2 transition-all duration-200
                            
                            ${
                                item.active
                                    ? "bg-violet-600 text-white shadow-lg"
                                    : "text-gray-400 hover:bg-[#1E2331] hover:text-white"
                            }
                            
                            `}
                        >

                            <Icon size={20} />

                            <span>
                                {item.title}
                            </span>

                        </button>

                    );
                })}

            </nav>

            {/* Bottom */}

            <div className="border-t border-[#242938] p-4">

                <button className="w-full flex items-center gap-3 rounded-xl px-4 py-3 text-gray-400 hover:bg-[#1E2331] hover:text-white transition">

                    <Settings size={20} />

                    Settings

                </button>

                <div className="mt-5 flex items-center gap-3 rounded-xl bg-[#1A2030] p-3">

                    <div className="w-11 h-11 rounded-full bg-violet-600 flex items-center justify-center">

                        <User size={20} />

                    </div>

                    <div>

                        <h3 className="font-medium">
                            Roland
                        </h3>

                        <p className="text-sm text-gray-400">
                            Indie Developer
                        </p>

                    </div>

                </div>

            </div>

        </aside>
    );
}