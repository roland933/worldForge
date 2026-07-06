import { getForges  } from "../../../services/forgeServices";
import { Select } from "../../ui/Form/Select/Select";
import { useEffect,useState } from "react";
export function ForgeSelect() {
        const [forges, setForges] = useState([]);
    
            useEffect(() => {
    
                async function loadForges() {
    
                    const data = await getForges();
    
                    setForges(data);
    
                }
    
                loadForges();
    
            }, []);
 
   
    return(
        <Select>
            <option >Choose a forge</option>
            {forges.map(f => (
                <option key={f.id} value={f.id}>{f.name}</option>
            ))}
        </Select>

    ) 


}