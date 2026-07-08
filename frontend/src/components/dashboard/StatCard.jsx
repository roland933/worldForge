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

                    <p className="text-sm text-violet-200">

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
                        flex
                        bg-violet-500/20
                        border border-violet-400/40
                        shadow-[0_0_20px_rgba(139,92,246,0.35)]
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