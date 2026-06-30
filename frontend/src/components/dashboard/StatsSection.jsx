import StatCard from "./StatCard"

export function StatsSection({stats}) {
  
    return(

<div className="grid grid-cols-2 gap-4">

    {stats.map(stat => (
        <StatCard
            key={stat.id}
            stat={stat}
            icon={stat.icon}
        />
    ))}

</div>
    )

}