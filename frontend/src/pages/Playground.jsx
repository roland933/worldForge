import  DashboardLayout  from "../layouts/DashboardLayout";
import { Card } from "../components/ui/Card/Card";
import  Button  from "../components/ui/Button/Button";
import { ButtonVariants } from "../components/ui/Button/buttonVariants";
import  PageHeader  from "../components/layout/PageHeader";
import { GraphCanvas } from "../components/ui/Canvas/GraphCanvas";
import { useState } from "react";
import { mockConnections } from "../data/mockConnections";
import { mockNodes } from "../data/mockNodes";
import { ControlPanel } from "../components/playground/ControlPanel";


export function PlaygroundPage() {
     const [nodes] = useState(mockNodes);

    const [connections] = useState(mockConnections);
 
    const [player,setPlayer] = useState({
        currentNode: 1
    });
    
    const movePalyer = () => {
        
        setPlayer(prev => ({
            ...prev,
            currentNode: prev.currentNode + 1
        }));
    
    }

    const reset = () => {
        setPlayer({currentNode:1})
    
    }   

 

    return (
        <DashboardLayout>

            <PageHeader
                title="Playground"
                description="Prototype and test game generation features."
            />

            <div className="grid grid-cols-12 gap-6">

                {/* Controls */}

                 <Card className="col-span-9 min-h-[700px]">

                    <div className="flex h-full items-center justify-center rounded-lg">

                        <GraphCanvas connections={connections} player={player} nodes={nodes}  />

                    </div>

                </Card>

                <Card className="col-span-3">

                    <ControlPanel currentNode={nodes} connections={connections}/>

                </Card>

                {/* Preview */}

               

            </div>

        </DashboardLayout>
    );
}