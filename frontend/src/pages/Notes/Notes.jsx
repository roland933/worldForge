import PageHeader from "../../components/layout/PageHeader";
import { CreateNoteModal } from "../../components/notes/CreateNoteModal/CreateNoteModal";
import { NoteCard } from "../../components/notes/NoteCard/NoteCard";
import { NoteFilter } from "../../components/notes/NoteFilter/NoteFilter";
import { NoteGrid } from "../../components/notes/NoteGrid/NoteGrid";
import Button from "../../components/ui/Button/Button";
import { ButtonVariants } from "../../components/ui/Button/buttonVariants";
import { SearchInput } from "../../components/ui/SearchInput/SearchInput";
import DashboardLayout from "../../layouts/DashboardLayout";
import { getGames } from "../../services/gameServices";
import { getNotes } from "../../services/notes/noteService";
import { useState } from "react";

export function Notes() {

    const notes = getNotes();
    const forges = getGames();
    const noteList = notes.map(n  => ({
        ...n,
        forge: forges.find(forge => forge.id === n.forgeId)
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
              <CreateNoteModal isOpen={isCreateOpen} onClose={handleCloseModal}/>  
            <PageHeader title="Notes" >
                    <Button variant={ButtonVariants.SECONDARY} onClick={handleOpenModal}>New note</Button>
            </PageHeader>

               <NoteFilter /> 

               <NoteGrid >
                    {noteList.map(n =>(
                        <NoteCard note={n}/>
                    ))}
                
                </NoteGrid> 
    

        </DashboardLayout>

    )


}