import { GameList } from "../../components/game/GameList/GameList";
import PageHeader from "../../components/layout/PageHeader";
import { SearchInput } from "../../components/ui/SearchInput/SearchInput";
import DashboardLayout from "../../layouts/DashboardLayout";
import { getGames } from "../../services/gameServices";

export function Games() {

    const games = getGames();

    return(
        <DashboardLayout>

            <PageHeader title="Games" />


            <SearchInput />

          
            <GameList games={games} />
            

        </DashboardLayout>

    )


}