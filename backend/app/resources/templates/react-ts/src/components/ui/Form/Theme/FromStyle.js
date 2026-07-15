// Form/styles/formStyles.js

export const FORM_STYLES = {

    field: "flex flex-col gap-2",

    label: "text-sm font-medium text-slate-300",

    input: `
        w-full
         h-[50px]
        rounded-xl
        border
        border-white/10
                    bg-white/[0.02]
        px-4
        py-3
        text-white
        outline-none
        transition
        focus:border-violet-500
    `,

    textarea: `
        w-full
        rounded-xl
        border
        border-white/5
                   bg-white/[0.02]
        px-4
        py-3
        text-white
        outline-none
        transition
         focus:border-violet-500
    `,

    select: `
       h-[50px]
        w-full
        rounded-xl
        border
        px-4
        
        border-white/10
                    bg-white/[0.02]
       
        text-white
        outline-none
        transition
        focus:border-violet-500
    `,

    error: "text-sm text-red-400"

};