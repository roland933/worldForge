import { ArrowRight } from "lucide-react";
import { Card } from "../ui/Card";
export default function ActiveProjectCard() {
    return (
       <Card>

            <p className="text-sm uppercase tracking-wider text-violet-400">
                Active Project
            </p>

            <h2 className="mt-3 text-3xl font-bold">
                Pandora's Box
            </h2>

            <p className="mt-4 max-w-2xl text-gray-400 leading-7">
                Ancient puzzle game inspired by Greek mythology.
                Solve mystical mechanisms, unlock forgotten seals
                and uncover the mystery hidden inside Pandora's Box.
            </p>

            <div className="mt-8">

                <div className="flex justify-between mb-2 text-sm">

                    <span className="text-gray-400">
                        Progress
                    </span>

                    <span className="font-medium">
                        72%
                    </span>

                </div>

                <div className="h-3 rounded-full bg-[#1F2433]">

                    <div
                        className="h-full rounded-full bg-violet-600"
                        style={{ width: "72%" }}
                    />

                </div>

            </div>

            <div className="mt-8 flex items-center justify-between">

                <span className="text-sm text-gray-500">
                    Last updated: Today
                </span>

                <button className="flex items-center gap-2 rounded-xl bg-violet-600 px-5 py-3 hover:bg-violet-500 transition">

                    Continue

                    <ArrowRight size={18} />

                </button>

            </div>

     </Card>
    );
}