import PageHeader from "../../components/layout/PageHeader";
import { PromptLibraryCard } from "../../components/promptLibrary/PromptLibraryCard/PromptLibraryCard";
import { PromptLibraryCreateModal } from "../../components/promptLibrary/PromptLibraryCreateModal/PromptLibraryCreateModal";

import { PromptLibraryFilter } from "../../components/promptLibrary/PromptLibraryFilter/PromptLibraryFilter";
import { PromptLibraryGrid } from "../../components/promptLibrary/PromptLibraryGrid/PromptLibraryGrid";
import Button from "../../components/ui/Button/Button";
import { ButtonVariants } from "../../components/ui/Button/buttonVariants";
import DashboardLayout from "../../layouts/DashboardLayout";
import { getPrompts } from "../../services/promptLibrary/promptLibraryService";
import { useState } from "react";

export function PromptLibrary() {
    const prompts = getPrompts();

            const [isCreateOpen, setIsCreateOpen] = useState(false);
                
            const handleOpenModal = () => {
                        setIsCreateOpen(true)
                    }
                
            const handleCloseModal = () => {
                        setIsCreateOpen(false)
                    }

    return(
        <DashboardLayout>
           
             <PromptLibraryCreateModal isOpen={isCreateOpen} onClose={handleCloseModal}/>
           
            <PageHeader title="Prompt library" >

                 <Button variant={ButtonVariants.SECONDARY} onClick={handleOpenModal}>New Prompt</Button>
            </PageHeader>



            <PromptLibraryFilter />
            <PromptLibraryGrid >    
                {prompts.map(p => (
                    <PromptLibraryCard key={p.id} prompt={p}/>
                ))}


            </PromptLibraryGrid>
    

        </DashboardLayout>

    )


}