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
    selectable?:boolean
};

export const nodeConfig: Record<NodeType, NodeConfig> = {
    start: {
        label: "Start",
        color: "#10B981",
        icon: "🏁",
        style: "bg-emerald-500 border-2 border-white/20",
        selectable:true
    },

    node: {
        label: "Node",
        color: "#8B5CF6",
        icon: "⚔️",
        style: "bg-violet-500 border-2 border-white/20 shadow-[0_0_25px_rgba(139,92,246,.35)]",
        selectable:true
    },

    boss: {
        label: "Boss",
        color: "#EF4444",
        icon: "👹",
        style: "bg-red-500 border-2 border-white/20",
        selectable:true

    },
    treasure: {
        label: "Treasure",
        color: "#EF4444",
        icon: "",
        style: "bg-amber-500 border-2 border-white/20",
        selectable:true
    },

    empty: {
        label: "",
        color: "",
        icon: "",
        style: "bg-white/10 border-2 border-white/20 shadow-[0_0_25px_rgba(139,92,246,.35)]",
        selectable:false
    },
}