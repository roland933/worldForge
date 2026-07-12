import { Backgrounds } from "../../../data/Background";
import { BackgroundType } from "../../shared/types/BackgroundType";

type BackgroundProps = {
    type:BackgroundType
}


export function Background({type}:BackgroundProps) {


const Image = Backgrounds[type];

return (
    <img
        src={Image}
        className="
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