import { ButtonVariants } from "./buttonVariants";

export const buttonStyles = {
        [ButtonVariants.PRIMARY]:
            "bg-violet-500/20 hover:bg-violet-500/30 text-violet-100 shadow-[0_0_20px_rgba(139,92,246,0.15)] border border-violet-400/40 hover:shadow-[0_0_30px_rgba(139,92,246,0.35)]",

        [ButtonVariants.SECONDARY]:
            "bg-white/5 border border-white/10 hover:bg-[#242B3C] text-white",

        [ButtonVariants.DANGER]:
            "bg-red-600 hover:bg-red-500 text-white",

         [ButtonVariants.OUTLINE]:
            "border border-[#2F3547] hover:bg-[#1A2030] text-white",
    };