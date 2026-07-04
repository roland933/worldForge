import { mockPromptCategories } from "../../../data/mockPromptCategories";
import { getPromptCategories } from "../../../services/promptLibrary/promptLibraryCategoryService";
import { Select } from "../../ui/Form/Select/Select";

export function PromptCategorySelect() {
    const cat = getPromptCategories();
    return(
        <Select>
                <option>Select a category</option>
                 {cat.map(c => (
                <option key={c.id} value={c.id}>{c.name}</option>
            ))}
        </Select>
    )


}