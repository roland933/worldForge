import  DashboardLayout  from "../layouts/DashboardLayout";
import { Card } from "../components/ui/Card/Card";
import  Button  from "../components/ui/Button/Button";
import { ButtonVariants } from "../components/ui/Button/buttonVariants";
import  PageHeader  from "../components/layout/PageHeader";
import { GraphCanvas } from "../components/ui/Canvas/GraphCanvas";
import { useEffect, useState } from "react";
import { mockConnections } from "../data/mockConnections";
import { mockNodes } from "../data/mockNodes";
import { ControlPanel } from "../components/playground/Panel/ControlPanel";
import { GenerateForgeModal } from "../components/game/GenerateForgeModal/GenerateForgeModal";
import {ToolbarButtonType} from "../components/playground/Graph/Toolbar/ToolbarButtonType";
import { GraphToolbar } from "../components/playground/Graph/GraphToolbar";
import { InspectorSidebar } from "../components/playground/InspectorSidebar";
import { NodePanel } from "../components/playground/Panel/NodePanel";

export function PlaygroundPage() {
        type EditorMode =
    | "idle"
    | "placing-node"
    | "connecting"
    | "moving";
    type GraphNode = {
    id: number;
    x: number;
    y: number;
    type: string;
};
     const [nodes] = useState(mockNodes);

    const [connections] = useState(mockConnections);
 
    const [player,setPlayer] = useState({
        currentNode: 1
    });

    const [editorMode, setEditorMode] = useState<EditorMode>("idle");

   const [selectedNode, setSelectedNode] = useState<GraphNode | null>(null);

    const[toolbarButtonType,setToolbarButtonType] = useState<ToolbarButtonType>("controls");

    const handleOpenPanel = (type:ToolbarButtonType) => {

            setToolbarButtonType(type)
    }
    const handleSelectedNode = (node:GraphNode) => {
        
        setSelectedNode(node)
    }
    


    return (
        <DashboardLayout>
        <GenerateForgeModal />
            <PageHeader
                title="Playground"
                description="Prototype and test game generation features."
            >

                  <Button variant={ButtonVariants.SECONDARY} >Generate forge</Button>
                   
                </PageHeader>

            <div className="grid grid-cols-12 gap-6">

                {/* Controls */}

                 <div className="col-span-9 min-h-[700px]">

                    <div className="flex h-full items-center justify-center rounded-lg">

                        <GraphCanvas 
                                connections={connections} 
                                player={player} 
                                nodes={nodes}
                                selectedNode={selectedNode}
                                handleSelectedNode={handleSelectedNode}  >

                            <GraphToolbar handleOpenPanel={handleOpenPanel} toolbarButtonType={toolbarButtonType}/>

                        </GraphCanvas>

                    </div>

                </div>


                    <InspectorSidebar>
                        {toolbarButtonType === "controls" && (
                         <ControlPanel currentNode={nodes} connections={connections}/>
                         )}

                         {toolbarButtonType === "nodes" && (
                            <NodePanel selectedNode={selectedNode}/>  
                         )}


                    </InspectorSidebar>

      

            </div>

        </DashboardLayout>
    );
}