import DashboardLayout from "../layouts/DashboardLayout";
import PageHeader from "../components/layout/PageHeader";
import ActiveGameCard from "../components/dashboard/ActiveGameCard";
import { getGames} from "../services/gameServices";
import StatCard from "../components/dashboard/StatCard";
import {
    FolderOpen,
    CheckSquare,
    Image,
    NotebookPen
} from "lucide-react";
export default function Dashboard() {
    const games = getGames();
    
    const activeGame = games[0];


    return (
        <DashboardLayout>

            <PageHeader
                title="My forge"
                subtitle="Welcome back, Roland 👋"
            />

        <div className="grid grid-cols-12 gap-6">

    <div className="col-span-8">

        <ActiveGameCard project={activeGame}/>

    </div>

    <div className="col-span-4">

        <div className="grid gap-6">

                <StatCard
                    title="Worlds"
                    value={6}
                    icon={FolderOpen}
                />

                <StatCard
                    title="Tasks"
                    value={21}
                    icon={CheckSquare}
                />

                <StatCard
                    title="Assets"
                    value={184}
                    icon={Image}
                />

                <StatCard
                    title="Notes"
                    value={37}
                    icon={NotebookPen}
                />

    </div>
     
    </div>

    <div className="col-span-6">

      

    </div>

    <div className="col-span-6">

      

    </div>

</div>
           

        </DashboardLayout>
    );
}