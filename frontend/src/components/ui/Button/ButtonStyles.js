import { ButtonVariants } from "./buttonVariants";

export const buttonStyles = {
        [ButtonVariants.PRIMARY]:
            "bg-violet-600 hover:bg-violet-500 text-white",

        [ButtonVariants.SECONDARY]:
            "bg-[#1A2030] hover:bg-[#242B3C] text-white",

        [ButtonVariants.DANGER]:
            "bg-red-600 hover:bg-red-500 text-white",

         [ButtonVariants.OUTLINE]:
            "border border-[#2F3547] hover:bg-[#1A2030] text-white",
    };