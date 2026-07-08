export function ActivityItem({activity}) {

    return (
          <div className="flex items-center justify-between py-3 border-b border-violet-400/10">

            <div>

                <p className="font-medium">
                    {activity.title}
                </p>

                <p className="text-sm text-gray-500">
                    {activity.time}
                </p>

            </div>

        </div>
    )

}