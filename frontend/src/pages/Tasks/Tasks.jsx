import PageHeader from "../../components/layout/PageHeader";
import { TaskCard } from "../../components/tasks/TaskCard/TaskCard";
import { TaskCreateModal } from "../../components/tasks/TaskCreateModal/TaskCreateModal";
import { TaskFilter } from "../../components/tasks/TaskFilter/TaskFilter";
import { TaskGrid } from "../../components/tasks/TaskGrid/TaskGrid";
import Button from "../../components/ui/Button/Button";
import { ButtonVariants } from "../../components/ui/Button/buttonVariants";
import { SearchInput } from "../../components/ui/SearchInput/SearchInput";
import DashboardLayout from "../../layouts/DashboardLayout";
import { getGames } from "../../services/forgeServices";
import { getTasks } from "../../services/tasks/taskService";
import { useState } from "react";


export function Tasks() {
    const tasks = getTasks();
    const forges = getGames();


    const taskList = tasks.map(task => ({
            ...task,
            forge: forges.find(forge => forge.id === task.forgeId)
        }));
            

    const [isCreateOpen, setIsCreateOpen] = useState(false);
        
    const handleOpenModal = () => {
                setIsCreateOpen(true)
            }
        
    const handleCloseModal = () => {
                setIsCreateOpen(false)
            }
    return(
        <DashboardLayout>
            <TaskCreateModal isOpen={isCreateOpen} onClose={handleCloseModal}/>
            <PageHeader title="Tasks" >

                <Button variant={ButtonVariants.SECONDARY} onClick={handleOpenModal}>New Task</Button>
            </PageHeader>

            <TaskFilter />
            
            <TaskGrid >
                {taskList.map(task => (
                    <TaskCard task={task}/>
                ))}

            </TaskGrid>

        </DashboardLayout>

    )


}