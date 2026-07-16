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
import { PlayerPanel } from "../components/playground/Panel/PlayerPanel.tsx";
import {  createForge,generateForge } from "../services/forgeServices.js"
import { GraphViewPort } from "../components/playground/Graph/GraphViewPort.tsx";
import { useConnections } from "../hooks/useConnections.ts";
import { usePlayerMovement } from "../hooks/usePlayerMovement.ts";
import { Connection } from "../components/shared/types/Graph/Connection.ts";
import { useKeyboard } from "../hooks/useKeyboard.ts";
export function PlaygroundPage() {

  

     const initialForm = {
            name: "",
            world_id: "",
            description: ""
    };

     const [showGrid,setShowGrid] = useState(true);
     const [showNodes, setShowNodes] = useState(true);
     const [showConnections, setShowConnections] = useState(true);
     const [showPlayer, setShowPlayer] = useState(true);
     const [background, setBackground] = useState<BackgroundType | null>(null);
     const [isGenerateOpen, setIsGenerateOpen] = useState(false);
     const [errors, setErrors] = useState({});
     const [form, setForm] = useState( initialForm );

     const [nodes,setNodes] = useState(mockNodes);

     const [connections,setConnections] = useState(mockConnections);

     const [selectedConnectionId, setSelectedConnectionId] = useState<number | null>(null);
    
    const [selectedNodeId, setSelectedNodeId] = useState<number | null>(null);
    const selectedNode =  nodes.find(n => n.id === selectedNodeId);

    const selectedConnection = connections.find(c => c.id === selectedConnectionId);

    const [pressedKeys,setPressedKey] = useState<Set<string>>(new Set());


    const handleGenerateModal = () => {
        setIsGenerateOpen(true)

    }

    const handleGenerateCloseModal = () => {
        setIsGenerateOpen(false)

    }
    
    const {player,movePlayer} = usePlayerMovement(connections);

     useKeyboard(movePlayer,setPressedKey)

 
        const handleChange = (field, value) => {

                setForm(prev => ({
                    ...prev,
                    [field]: value
                }));   

        }

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

        const [projectName, setProjectName] = useState("");
        const [template, setTemplate] = useState("react-ts");
        const [mapSize, setMapSize] = useState("medium");
    
    
        const handleGenerateForge = async() => {
            try {    
            await generateForge({projectName,template,mapSize,map:{nodes:nodes,connections:connections,player:player,background:background}})
           
    
            handleGenerateCloseModal();
            }catch(error) {
    
            }
        };


    useEffect(() => {

        if(background) {
                setShowGrid(false);
        }


    },[background])



    return (
        <DashboardLayout>
           <GenerateForgeModal
                projectName={projectName}
                template={template}
                mapSize={mapSize}
                setMapSize={setMapSize}
                setProjectName={setProjectName}
                setTemplate={setTemplate} 
                handleGenerateForge={handleGenerateForge}
                isOpen={isGenerateOpen}
                onClose={handleGenerateCloseModal}
            
            />
                        
            <PageHeader
                title="Playground"
                description="Prototype and test game generation features."
            >

                  <Button variant={ButtonVariants.SECONDARY} onClick={handleGenerateModal}>Generate forge</Button>
                   
                </PageHeader>

            <div className="grid grid-cols-12 gap-6">

                {/* Controls */}

                 <div className="col-span-9 min-h-[700px]">

                    <div className="flex h-full items-center justify-center rounded-lg">

                        <GraphCanvas 

                                >

                            <GraphToolbar handleOpenPanel={handleOpenPanel} 
                                          toolbarButtonType={toolbarButtonType}
                            />

                               <GraphViewPort 
                                    selectedNode={selectedNode} 
                                    handleSelectedNode={handleSelectedNode}
                                    handleSelectedConnection={handleSelectedConnection}  
                                    selectedConnection={selectedConnection}
                                    nodes={nodes}
                                    background={background}
                                    showGrid={showGrid} 
                                    showNodes={showNodes}
                                    showConnections={showConnections}
                                    showPlayer={showPlayer}
                                    connections={connections} 
                                    player={player}
                                />

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

                         {toolbarButtonType === "player" && (
                            <PlayerPanel />

                             )}      
                    </InspectorSidebar>

      

            </div>

        </DashboardLayout>
    );
}