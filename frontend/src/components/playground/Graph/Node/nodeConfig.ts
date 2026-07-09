type NodeType =
    | "start"
    | "node"
    | "boss"
    

type NodeConfig = {
    style: string;
    label:string,
    color:string,
    icon:string,
};

export const nodeConfig: Record<NodeType, NodeConfig> = {
    start: {
        label: "Start",
        color: "#10B981",
        icon: "🏁",
        style: "bg-emerald-500 border-2 border-white/20"
    },

    node: {
        label: "Enemy",
        color: "#8B5CF6",
        icon: "⚔️",
        style: "bg-violet-500 border-2 border-white/20 shadow-[0_0_25px_rgba(139,92,246,.35)]"
    },

    boss: {
        label: "Boss",
        color: "#EF4444",
        icon: "👹",
        style: "bg-red-500 border-2 border-white/20"
    }
}