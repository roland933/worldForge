import { useState } from "react";
import { GameList } from "../../components/game/GameList/GameList";
import PageHeader from "../../components/layout/PageHeader";
import Button from "../../components/ui/Button/Button";
import { ButtonVariants } from "../../components/ui/Button/buttonVariants";
import { SearchInput } from "../../components/ui/SearchInput/SearchInput";
import DashboardLayout from "../../layouts/DashboardLayout";
import { getGames } from "../../services/gameServices";
import { CreateGameModal } from "../../components/game/GameModal/CreateGameModal";

export function Games() {

    const games = getGames();
    const [isCreateOpen, setIsCreateOpen] = useState(false);

    const handleOpenModal = () => {
        setIsCreateOpen(true)

    }

    const handleCloseModal = () => {
        setIsCreateOpen(false)
    }

    return(
        <DashboardLayout>
            <CreateGameModal isOpen={isCreateOpen} onClose={ handleCloseModal}/>

            <PageHeader title="Games" >

                <Button variant={ButtonVariants.SECONDARY} onClick={handleOpenModal}>New game</Button>
            </PageHeader>


            <SearchInput />

          
            <GameList games={games} />
            

        </DashboardLayout>

    )


}