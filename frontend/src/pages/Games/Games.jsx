import { GameList } from "../../components/game/GameList/GameList";
import PageHeader from "../../components/layout/PageHeader";
import Button from "../../components/ui/Button/Button";
import { ButtonVariants } from "../../components/ui/Button/buttonVariants";
import { SearchInput } from "../../components/ui/SearchInput/SearchInput";
import DashboardLayout from "../../layouts/DashboardLayout";
import { getGames } from "../../services/gameServices";

export function Games() {

    const games = getGames();

    return(
        <DashboardLayout>

            <PageHeader title="Games" >

                <Button variant={ButtonVariants.SECONDARY}>New game</Button>
            </PageHeader>


            <SearchInput />

          
            <GameList games={games} />
            

        </DashboardLayout>

    )


}