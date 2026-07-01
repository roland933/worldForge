import { mockStats } from "../data/mockStats";
import { mockActivities } from "../data/mockActivities";
import { getGames} from "../services/gameServices";
import { mockActions } from "../data/mockActions";
export function getDashboard() {

        const games = getGames();
        
           return {
                activeGame: games[0],
                stats: mockStats,
                activities: mockActivities,
                actions: mockActions,
         };

}


export function createDashboardStats(games) {

    return [
        {
            id: 1,
            title: "Games",
            value: games.length,
        },
        {
            id: 2,
            title: "Completed",
            value: games.filter(
                g => g.status === "completed"
            ).length,
        }
    ];

}