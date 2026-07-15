import type { ConnectionType } from "../../../shared/types/Graph/ConntionType";

type Config = {
    stroke: string;
    width:number,
    opacity?:string,
    dash?:string,
};

export const connectionConfig:Record<ConnectionType,Config> = {
    normal: {
        stroke: "#8B5CF6",
        width: 4,
        opacity: ".35"
    },

    empty: {
        stroke: "rgba(255,255,255,.12)",
        width: 3,
        dash: "6 6",
        opacity: ".7"
    }

    
};