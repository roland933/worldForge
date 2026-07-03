import { getTaskStatuses } from "../../../services/tasks/taskService";
import { Select } from "../../ui/Form/Select/Select";

export function TaskStatusSelect() {
    const statuses = getTaskStatuses();
    return (
        <Select >
            <option>All</option>
            {statuses.map(s => (
                <option key={s.id} value={s.id}>{s.name}</option>
            ))}

        </Select>
    )

}