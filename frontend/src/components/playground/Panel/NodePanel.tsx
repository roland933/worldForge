import { useEffect, useState } from "react";
import { Form } from "../../ui/Form/Form";
import { FormField } from "../../ui/Form/FormField";
import { Select } from "../../ui/Form/Select/Select";
import {Input} from "../../ui/Form/Input/Input";
import { Panel } from "../../ui/Panel/Panel";
import { PanelHeader } from "../../ui/Panel/PanelHeader";
import { nodeConfig, NodeType } from "../Graph/Node/nodeConfig";
import Button from "../../ui/Button/Button"
import { GraphNode } from "../../shared/types/Graph/GraphNode";
import { DeletePanelButton, PanelDeleteButton } from "../../shared/panel/actions/PanelDeleteButton";
import { PanelAddButton } from "../../shared/panel/actions/PanelAddButton";
import { PanelActions } from "../../ui/Panel/PanelActions";
import { NodeTypeButton } from "../NodeTypeButton";

type NodePanelProps={
  selectedNode?:GraphNode,
  onDelete?:() => void,
  handleNodeTypeChange:(type:string) => void,
}

export function NodePanel({selectedNode,onDelete,handleNodeTypeChange}:NodePanelProps) {


  return (
  <Panel>
    <PanelHeader title="Nodes" subtitle="Create and edit graph nodes."/>

     {selectedNode && (
      <div className="text-sm text-violet-200 flex gap-2">
       id: <b>#{selectedNode?.id}</b>
       type: <b>{selectedNode?.type}</b>
     </div>
     )} 
     

    <Form>

      <div className="flex gap-2">
        <FormField label="x:">
            <Input value={selectedNode?.x ?? ""} className="!py-2 text-sm !h-[38px]" disabled={!selectedNode}/>
        </FormField>

          <FormField label="y:">
            <Input value={selectedNode?.y ?? ""} className="!py-2 text-sm !h-[38px]" disabled={!selectedNode}/>
        </FormField>
    </div>
       
    </Form>

    <div className="flex gap-2">

         {Object.entries(nodeConfig)
              
              .map(([key, config]) => (
                <NodeTypeButton  type={key as NodeType} label={config.label} onClick={() => handleNodeTypeChange(key as NodeType)}/>
           
          ))}
          </div>

     <PanelActions>

      
        <PanelDeleteButton title="Delete node" onDelete={onDelete} disabled={!selectedNode}  />

      </PanelActions>     
   
     

  </Panel>
  )
}