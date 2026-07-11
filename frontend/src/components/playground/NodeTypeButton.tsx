import { nodeConfig, NodeType } from "./Graph/Node/nodeConfig"



export function NodeTypeButton({onClick,label,type}) {
        const config = nodeConfig[type as NodeType];
        
return (
      
<button  
        onClick={onClick}
        className={
             `text-sm
              ${config?.style}
              ${config?.hover}  
                py-2 
                px-3 
                rounded-xl
                transition-all
                active:translate-y-1  inset-shadow-sm 
                font-bold
              
                hover:cursor-pointer
                
                `
        }
        
        
        >
                      {label}
 </button>

)

}