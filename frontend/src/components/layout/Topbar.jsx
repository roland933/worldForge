import {
    Bell,
    Plus,
    Search,
    User
} from "lucide-react";

export default function Topbar() {

    return (

        <header className="h-20 border-b border-[#242938] bg-[#151922] px-8 flex items-center justify-between">

            {/* Left */}

            <div>

                <h2 className="text-2xl font-bold">
                    Good Morning 👋
                </h2>

                <p className="text-gray-400 mt-1">
                    Welcome back, Roland
                </p>

            </div>

            {/* Right */}

            <div className="flex items-center gap-4">

                {/* Search */}

                <div className="relative">

                    <Search
                        size={18}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                    />

                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-72 rounded-xl bg-[#1A2030] border border-[#2B3245]
                        py-3 pl-11 pr-4 outline-none
                        focus:border-violet-500 transition"
                    />

                </div>

                {/* New */}

                <button
                    className="
                    h-12
                    px-5
                    rounded-xl
                    bg-violet-600
                    hover:bg-violet-500
                    transition
                    flex
                    items-center
                    gap-2
                    font-medium
                    "
                >

                    <Plus size={18} />

                    New

                </button>

                {/* Notification */}

                <button
                    className="
                    w-12
                    h-12
                    rounded-xl
                    bg-[#1A2030]
                    hover:bg-[#242B3C]
                    transition
                    flex
                    items-center
                    justify-center
                    "
                >

                    <Bell size={20} />

                </button>

                {/* Avatar */}

                <button
                    className="
                    w-12
                    h-12
                    rounded-full
                    bg-violet-600
                    flex
                    items-center
                    justify-center
                    "
                >

                    <User size={20} />

                </button>

            </div>

        </header>

    );

}