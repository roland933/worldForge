import { getAssetsCategories } from "../../../services/assets/assetCategoryService";
import { Select } from "../../ui/Form/Select/Select";

export function AssetCategorySelect({className=""}) {
    const categories = getAssetsCategories();
    console.log(categories);
    return(

        <Select>
            <option></option>
            {categories.map(cat => (
                <option key={cat.id } value={cat.id}>{cat.name}</option>
            ))}

        </Select>
    )

}