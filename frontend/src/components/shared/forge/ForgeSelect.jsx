import { getGames } from "../../../services/gameServices";
import { Select } from "../../ui/Form/Select/Select";

export function ForgeSelect() {
    const forges = getGames();
    return(
        <Select>
            <option >Choose a forge</option>
            {forges.map(f => (
                <option key={f.id} value={f.id}>{f.name}</option>
            ))}
        </Select>

    ) 


}