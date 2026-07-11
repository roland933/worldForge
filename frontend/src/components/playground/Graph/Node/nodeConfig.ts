export type NodeType =
    | "start"
    | "node"
    | "boss"
    | "empty"
    |"treasure"


type NodeConfig = {
    style: string;
    label:string,
    color:string,
    icon:string,
    hover?:string,
    selectable?:boolean
};

export const nodeConfig: Record<NodeType, NodeConfig> = {
    start: {
        label: "Start",
        color: "#10B981",
        icon: "🏁",
        style: "bg-emerald-500 border-2 border-white/20",
        hover: "hover:bg-emerald-400",
        selectable:true
    },

    node: {
        label: "Node",
        color: "#8B5CF6",
        icon: "⚔️",
        style: "bg-violet-500 border-2 border-white/20 shadow-[0_0_25px_rgba(139,92,246,.35)]",
        hover: "hover:bg-violet-400",
        selectable:true
    },

    boss: {
        label: "Boss",
        color: "#EF4444",
        icon: "👹",
        style: "bg-red-500 border-2 border-white/20",
        hover: "hover:bg-red-400",
        selectable:true

    },
    treasure: {
        label: "Treasure",
        color: "#EF4444",
        icon: "",
        style: "bg-amber-500 border-2 border-white/20",
        hover: "hover:bg-amber-400",
        selectable:true
    },

    empty: {
        label: "Empty",
        color: "",
        icon: "",
        style: "bg-white/15 border-2 border-white/10 shadow-[0_0_25px_rgba(139,92,246,.35)] backdrop-blur-3xl",
         hover: "hover:bg-white/10",
        selectable:false
    },
}