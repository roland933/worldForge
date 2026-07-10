import { Grid3X3, Map, User, ZoomIn } from "lucide-react";
import { ToolbarButton } from "./ToolbarButton";

export function GraphToolbar({toolbarButtonType,handleOpenPanel}) {
   


    return (

        <div
            className="
                flex
                items-center
                justify-between
                px-6
                py-4
                border-b border-white/10
            "
        >
                       

            <div>


                <h2 className="font-semibold">
                     <div className="flex items-center gap-2 text-sm text-emerald-400">
            
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"/>
            
                Graph Preview
            
            </div>
                    Playground Preview
                </h2>

                <p className="text-sm text-slate-400">
                    Test your generated graph.
                </p>

            </div>

            <div className="flex gap-2">

                 <ToolbarButton onClick={() => handleOpenPanel("controls")}  active={toolbarButtonType === "controls"} icon={<Grid3X3 size={16}/>}>
                    Controls

                </ToolbarButton>

                <ToolbarButton  onClick={() => handleOpenPanel("nodes")} active={toolbarButtonType === "nodes"} icon={<ZoomIn size={16}/>}>
                    Nodes
                </ToolbarButton>

                 <ToolbarButton onClick={() => handleOpenPanel("connections")} active={toolbarButtonType === "connections"}  icon={<Map size={16}/>}>
                    Connections
                </ToolbarButton>

                <ToolbarButton onClick={() => handleOpenPanel("background")}  active={toolbarButtonType === "background"} icon={<Grid3X3 size={16}/>}>
                    Background
                </ToolbarButton>

               

                <ToolbarButton onClick={() => handleOpenPanel("export")}  active={toolbarButtonType === "export"}    icon={<User size={16}/>}>
                    Export
                </ToolbarButton>

            </div>

        </div>

    );

}