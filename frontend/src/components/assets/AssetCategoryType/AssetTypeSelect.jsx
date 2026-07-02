
import { getAssetTypes } from "../../../services/assets/assetTypeService";
import { Select } from "../../ui/Form/Select/Select";

export function AssetTypeSelect() {
    const types = getAssetTypes();
    return(

        <Select>
              <option></option>
            {types.map(type => (
                <option key={type.id }
                        value={type.id}
                        >

                            {type.name}
                            
                </option>
            ))}

        </Select>
    )

}