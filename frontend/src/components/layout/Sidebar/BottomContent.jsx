import {
    Settings,
    User
} from "lucide-react";
export function BottomContent() {

    return (

                    <div className="border-t border-[#242938] p-4">

                <button className="w-full flex items-center gap-3 rounded-xl px-4 py-3 text-gray-400 hover:bg-[#1E2331] hover:text-white transition">

                    <Settings size={20} />

                    Settings

                </button>

                <div className="mt-5 flex items-center gap-3 rounded-xl bg-white/4 p-3">

                    <div className="w-11 h-11 rounded-full bg-violet-600 flex items-center justify-center">

                        <User size={20} />

                    </div>

                    <div>

                        <h3 className="font-medium">
                            Roland
                        </h3>

                        <p className="text-sm text-violet-100">
                            Indie Developer
                        </p>

                    </div>

                </div>

            </div>


    )
    
}