import PageHeader from "../../components/layout/PageHeader";
import { PromptLibraryCard } from "../../components/promptLibrary/PromptLibraryCard/PromptLibraryCard";
import { PromptLibraryGrid } from "../../components/promptLibrary/PromptLibraryGrid/PromptLibraryGrid";
import DashboardLayout from "../../layouts/DashboardLayout";
import { getPrompts } from "../../services/promptLibrary/promptLibraryService";


export function PromptLibrary() {
    const prompts = getPrompts();

    return(
        <DashboardLayout>

            <PageHeader title="Prompt library" />


            <PromptLibraryGrid >    
                {prompts.map(p => (
                    <PromptLibraryCard key={p.id} prompt={p}/>
                ))}


            </PromptLibraryGrid>
    

        </DashboardLayout>

    )


}