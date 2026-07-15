import { Backgrounds } from "../../../data/Background";
import type { BackgroundType } from "../../shared/types/BackgroundType";

type BackgroundProps = {
    type:BackgroundType | null
}


export function Background({type}:BackgroundProps) {


const Image = Backgrounds[type];

return (
    <img
        src={Image}
        className="
        brightness-65
            absolute
            inset-0
            w-full
            h-full
            object-cover
            -z-10
        "
    />
);

}