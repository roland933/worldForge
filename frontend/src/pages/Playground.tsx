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
import { Direction } from "../components/shared/types/Direction.ts";
import { ViewPanel } from "../components/playground/Panel/ViewPanel.tsx";
import { BackgroundType } from "../components/shared/types/BackgroundType.ts";

export function PlaygroundPage() {
        type EditorMode =
    | "idle"
    | "placing-node"
    | "connecting"
    | "moving";



     const [showGrid,setShowGrid] = useState(true);
     const [showNodes, setShowNodes] = useState(true);
     const [showConnections, setShowConnections] = useState(true);
     const [showPlayer, setShowPlayer] = useState(true);
    const [background, setBackground] = useState<BackgroundType>("forest");

     const [nodes,setNodes] = useState(mockNodes);
     const [player,setPlayer] = useState({currentNode: 1  });
     const [connections,setConnections] = useState(mockConnections);
     const [selectedNodeId, setSelectedNodeId] = useState<number | null>(null);
     const [selectedConnectionId, setSelectedConnectionId] = useState<number | null>(null);
    

    const selectedNode =  nodes.find(n => n.id === selectedNodeId);
    const selectedConnection = connections.find(c => c.id === selectedConnectionId);
    const [pressedKeys,setPressedKey] = useState<Set<string>>(new Set());


    const getAvailableConnections = (nodeId:number) => {

    return connections.filter(c =>
            c.type === "normal" &&
            (c.from === nodeId || c.to === nodeId)
        );
            
    }


    const movePlayer = (direction:Direction) => {

        setPlayer(prev => {
        
        
        const connection = getAvailableConnections(prev.currentNode).find(c => {

        if (c.from === prev.currentNode) {
            return c.directions?.from === direction;
        }

        return c.directions?.to === direction;
    });
            if (!connection) {
                    return prev;
                }
        
                const targetId =
        connection.from === prev.currentNode
            ? connection.to
            : connection.from;
            
        
        return {
                currentNode: targetId
        };

        });

    }

        useEffect(() => {
     
           const handleKeyDown = (e: KeyboardEvent) => {
                 
                         setPressedKey(prev => {
     
                         const next = new Set(prev);
     
                         next.add(e.code);
     
                         return next;
     
                     });

                      if (e.code === "KeyD") {
                          movePlayer("right");
                      }

                       if (e.code === "KeyA") {
                          movePlayer("left");
                      }

                       if (e.code === "KeyW") {
                          movePlayer("up");
                        }

                       if (e.code === "KeyS") {
                          movePlayer("down");
                        }
                    
     
          };
     
          const handleKeyUp = (e: KeyboardEvent) => {
     
                 setPressedKey(prev => {
     
                     const next = new Set(prev);
     
                     next.delete(e.code);
     
                     return next;
     
                 });
     
         };
     
           window.addEventListener("keydown", handleKeyDown);
           window.addEventListener("keyup", handleKeyUp);
     
     
             return () => {
                 window.removeEventListener("keydown", handleKeyDown);
                 window.removeEventListener("keyup", handleKeyUp);
             };
     
         },[player,connections]);

 
 

    const [editorMode, setEditorMode] = useState<EditorMode>("idle");

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


            handleOpenPanel("nodes")
          
    }

    const handleSelectedConnection = (id:number) => {
       
        setSelectedConnectionId(id);
        handleOpenPanel("connections")
       
    }

    const handleNodeTypeChange = (type: string) => {
       
        if (!selectedNode) return;

         setNodeType(type)
         
          setNodes(prev =>
                prev.map(node =>
                    node.id === selectedNode.id
                        ? {
                            ...node,
                            type: type
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
                                showGrid={showGrid}
                                showNodes={showNodes}
                                showPlayer={showPlayer}
                                showConnections={showConnections} 
                                handleSelectedConnection={handleSelectedConnection}
                                
                                >

                            <GraphToolbar handleOpenPanel={handleOpenPanel} toolbarButtonType={toolbarButtonType}/>

                        </GraphCanvas>

                    </div>

                </div>


                    <InspectorSidebar>
                        {toolbarButtonType === "controls" && (
                         <ControlPanel currentNode={nodes} 
                                      connections={connections} 
                                      pressedKeys={pressedKeys}
                          
                                      
                                      />
                         )}

                         {toolbarButtonType === "nodes" && (
                            <NodePanel selectedNode={selectedNode} 
                                      
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

                          {toolbarButtonType === "view" && (
                            <ViewPanel showGrid={showGrid} 
                                       setShowGrid={setShowGrid} 
                                       showNode={showNodes} 
                                       showConnection={showConnections}
                                       showPlayer={showPlayer}
                                       setShowNodes={setShowNodes}
                                       setShowConnections={setShowConnections}
                                       setShowPlayer={setShowPlayer}
                                       background={background}
                                       setBackground={setBackground}
                                    
                                         
                                       />  
                         )}


                    </InspectorSidebar>

      

            </div>

        </DashboardLayout>
    );
}