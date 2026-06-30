import { IconColors } from "../../constants/iconColors";
import {Card} from "../ui/Card/Card";

export default function StatCard({
    stat,
    icon: Icon,
    iconColor = IconColors.PURPLE,
}) {

    return (

        <Card className="min-h-36">

            <div className="flex items-center justify-between">

                <div>

                    <p className="text-sm text-gray-400">

                        {stat.title}

                    </p>

                    <h2 className="mt-3 text-3xl font-bold">

                        {stat.value}

                    </h2>

                </div>

                <div
                    className={`
                        h-14
                        w-14
                        rounded-xl
                        ${iconColor}
                        flex
                        items-center
                        justify-center
                    `}
                >

                    {Icon && <Icon size={24} />}

                </div>

            </div>

        </Card>

    );

}