import { useState } from "react";
import  type { Direction } from "../components/shared/types/Direction";
import  type { Connection } from "../components/shared/types/Graph/Connection";



export const usePlayerMovement=(connections:Connection[]) => {

        
        const [player,setPlayer] = useState({currentNode: 1,  direction: "up" as Direction  });

        const movePlayer = (direction:Direction) => {
                        setPlayer(prev => {
                                let directionToSave = prev.direction; 
                                const availableConnections = connections.filter(c =>
                                                c.type === "normal" &&
                                                (c.from === prev.currentNode || c.to === prev.currentNode)
                                                );

          
                                const connection = availableConnections.find(c => {
                                
                                if (c.from === prev.currentNode) {
                               directionToSave= c.directions?.from as Direction
                                return c.directions?.from === direction;
                                }
                                directionToSave = c.directions?.to as Direction
                                return c.directions?.to === direction; 
                        });


                        if (!connection) {
                                return prev;
                        }

                        
                        const targetId = connection.from === prev.currentNode  ? connection.to   : connection.from;
                        
                        
                        return {
                                currentNode: targetId,
                                direction:  directionToSave,
                        };
                });

}

        return {player,movePlayer}

} 