import { getWorlds } from "../../../services/worldService";
import { Select } from "../../ui/Form/Select/Select";

export function WorldSelect({onChange}) {
    const worlds = getWorlds();
    return(
        <Select onChange={onChange}>
            <option >Choose a world</option>
            {worlds.map(f => (
                <option key={f.id} value={f.id}>{f.name}</option>
            ))}
        </Select>

    ) 


}