import {
    Sparkles,
    Hammer,
} from "lucide-react";

import { NavLink } from "react-router-dom";

import { WorldForgeRoutes } from "../../../routes/routes";
import { Menu } from "../../../menu/Menu";
import { BottomContent } from "./BottomContent";

const menu = Menu;

export default function Sidebar() {
    return (
       
        <aside className="w-72  border-r bg-white/6
                   backdrop-blur-3xl
                    border border-white/5
                    rounded-3xl

shadow-[0_20px_80px_rgba(0,0,0,0.45)] flex flex-col">

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

                        <p className="text-sm text-violet-300">
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

                         <NavLink
                                key={item.title}
                                to={item.path}
                                className={({ isActive }) => `
                                    w-full
                                    flex
                                    items-center
                                    gap-3
                                    rounded-xl
                                    
                                    px-4
                                    py-3
                                    mb-2
                                    transition-all
                                    duration-200

                                    ${
                                        isActive
                                            ? "bg-violet-500/20 text-white border border-violet-400/40 shadow-[0_0_25px_rgba(139,92,246,0.25)]"
                                            : "text-gray-400 hover:bg-white/5 hover:border-white/10 hover:text-white"
                                    }
                                `}
                            >

                <Icon size={20} />

                <span>{item.title}</span>

            </NavLink>

                    );
                })}

            </nav>

             {/* Bottom */}
             <BottomContent />       


        </aside>
      
    );
}