import  DashboardLayout  from "../layouts/DashboardLayout";
import  Button  from "../components/ui/Button/Button";
import { ButtonVariants } from "../components/ui/Button/buttonVariants";
import  PageHeader  from "../components/layout/PageHeader";
import { GraphCanvas } from "../components/ui/Canvas/GraphCanvas";
import { useEffect, useState } from "react";
import { mockConnections } from "../data/mockConnections.ts";
import { mockNodes } from "../data/mockNodes.ts";
import { ControlPanel } from "../components/playground/Panel/ControlPanel";
import { GenerateForgeModal } from "../components/game/GenerateForgeModal/GenerateForgeModal";
import {ToolbarButtonType} from "../components/playground/Graph/Toolbar/ToolbarButtonType";
import { GraphToolbar } from "../components/playground/Graph/GraphToolbar";
import { InspectorSidebar } from "../components/playground/InspectorSidebar";
import { NodePanel } from "../components/playground/Panel/NodePanel";
import { NodeType } from "../components/playground/Graph/Node/nodeConfig";
import { SearchSlash } from "lucide-react";
import { ConnectionPanel } from "../components/playground/Panel/ConnectionPanel";

export function PlaygroundPage() {
        type EditorMode =
    | "idle"
    | "placing-node"
    | "connecting"
    | "moving";

     const [nodes,setNodes] = useState(mockNodes);

    const [connections,setConnections] = useState(mockConnections);
 
    const [player,setPlayer] = useState({
        currentNode: 1
    });

    const [editorMode, setEditorMode] = useState<EditorMode>("idle");


   const [selectedNodeId, setSelectedNodeId] = useState<number | null>(null);
   const [selectedConnectionId, setSelectedConnectionId] = useState<number | null>(null);


   const selectedNode =  nodes.find(n => n.id === selectedNodeId);
   const selectedConnection = connections.find(c => c.id === selectedConnectionId);


   const [nodeType, setNodeType] = useState<NodeType>("node");

   const[toolbarButtonType,setToolbarButtonType] = useState<ToolbarButtonType>("controls");

    const handleOpenPanel = (type:ToolbarButtonType) => {
            setToolbarButtonType(type)
    }

    const handleSelectedNode = (id:number) => {
          

          setSelectedNodeId(id);

          const node = nodes.find(n => n.id === id);

            if (node) {
                setNodeType(node.type as NodeType);
            }

          
    }

    const handleSelectedConnection = (id:number) => {
       setSelectedNodeId(null);
        setSelectedConnectionId(id);
       
    }

    const handleNodeTypeChange = (type: string) => {
        if (!selectedNode) return;
    
         setNodeType(type)   
    };
    
    const handleAddNode = () => {
       
        if (!selectedNode) return;
         
  
            setNodes(prev =>
                prev.map(node =>
                    node.id === selectedNode.id
                        ? {
                            ...node,
                            type: nodeType
                        }
                        : node
                )
            );
    }

     const handleDeleteNode = () => {
         if (!selectedNode) return;

          setNodes(prev =>
            prev.filter(node => node.id !== selectedNode.id)
        );

        setNodeType("empty")
        setSelectedNodeId(null);
               
    }

     const handleDeleteConnection = () => {
         if (!selectedConnection) return;

         if(selectedConnection.type === "empty") {
            alert("This connection can not deleted")
            return;
         }
      
         setConnections(prev =>
                prev.map(connection =>
                    connection.id === selectedConnection.id
                        ? {
                            ...connection,
                            type: "empty"
                        }
                        : connection
                )
            );

             setSelectedConnectionId(null);
       
               
    }

     const handleAddConnection = () => {
         if (!selectedConnection) return;

    
      
         setConnections(prev =>
                prev.map(connection =>
                    connection.id === selectedConnection.id
                        ? {
                            ...connection,
                            type: "normal"
                        }
                        : connection
                )
            );


            
       
               
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
                                selectedNode={selectedNodeId}
                                selectedConnection={selectedConnectionId}
                                handleSelectedNode={handleSelectedNode}  
                                handleSelectedConnection={handleSelectedConnection}
                                
                                >

                            <GraphToolbar handleOpenPanel={handleOpenPanel} toolbarButtonType={toolbarButtonType}/>

                        </GraphCanvas>

                    </div>

                </div>


                    <InspectorSidebar>
                        {toolbarButtonType === "controls" && (
                         <ControlPanel currentNode={nodes} connections={connections}/>
                         )}

                         {toolbarButtonType === "nodes" && (
                            <NodePanel selectedNode={selectedNode} 
                                       onAdd={handleAddNode}
                                       nodeType={nodeType} 
                                       onDelete={handleDeleteNode} 
                                       handleNodeTypeChange={handleNodeTypeChange}
                                       />  
                         )}

                         {toolbarButtonType === "connections" && (
                            <ConnectionPanel 
                                       onAdd={handleAddConnection}
                                       selectedConnection={selectedConnection}
                                       onDelete={handleDeleteConnection}
                                         
                                       />  
                         )}


                    </InspectorSidebar>

      

            </div>

        </DashboardLayout>
    );
}