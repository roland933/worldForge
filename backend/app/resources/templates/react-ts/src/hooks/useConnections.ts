import type { Connection } from "../components/shared/types/Graph/Connection";

type Props  = {
    connections:Connection[]
}


export const useConnections = ({connections}:Props) => {


    const getAvailableConnections = (nodeId:number) => {

    return connections.filter(c =>
            c.type === "normal" &&
            (c.from === nodeId || c.to === nodeId)
        );
            
    }

 

    return {getAvailableConnections}

}