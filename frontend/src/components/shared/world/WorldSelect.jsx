import { getWorlds } from "../../../services/worldService";
import { Select } from "../../ui/Form/Select/Select";

export function WorldSelect({onChange,error}) {
    const worlds = getWorlds();
    return(
        <Select onChange={onChange} error={error}>
            <option >Choose a world</option>
            {worlds.map(f => (
                <option key={f.id} value={f.id}>{f.name}</option>
            ))}
        </Select>

    ) 


}