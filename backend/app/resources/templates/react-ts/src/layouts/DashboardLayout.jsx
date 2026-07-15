import Sidebar from "../components/layout/Sidebar/Sidebar";
import { Background } from "./Background";


export default function DashboardLayout({ children }) {
    return (
        <div className="flex h-screen  text-white p-8 gap-10 relative">
             <Background  />
            
             <Sidebar />
            
            <div className="flex flex-1 flex-col overflow-hidden">
                    <main className="relative flex-1 overflow-y-auto p-8 border border-white/8  rounded-3xl backdrop-blur-3xl"  style={{
        background: `
            radial-gradient(circle at 25% 30%, rgba(139,92,246,.08), transparent 35%),
            radial-gradient(circle at 80% 60%, rgba(236,72,153,.05), transparent 40%),
            linear-gradient(135deg,
                rgba(255,255,255,.04),
                rgba(139,92,246,.02),
                rgba(255,255,255,.03))
        `
    }}>
                  
                     <div className="relative z-10">
                        {children}
                        </div>  
                    </main>
            </div>

        </div>
    );
}