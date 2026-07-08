import Sidebar from "../components/layout/Sidebar/Sidebar";
import { Background } from "./Background";


export default function DashboardLayout({ children }) {
    return (
        <div className="flex h-screen  text-white p-8 gap-10">
             <Background  />   
             <Sidebar />

            <div className="flex flex-1 flex-col overflow-hidden">

               
                <main className="flex-1 overflow-y-auto p-8 bg-gradient-to-br
from-white/[0.04]
via-violet-500/[0.015]
to-white/[0.03] border border-white/8  rounded-3xl backdrop-blur-3xl">
                    {children}
                </main>

            </div>

        </div>
    );
}