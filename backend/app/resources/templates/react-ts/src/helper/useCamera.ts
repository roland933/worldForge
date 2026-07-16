import type { Player } from "../components/shared/types/Player/Player";

type Props = {
    player: Player;
    viewportWidth: number;
    viewportHeight: number;
}

export const useCamera = ({
    player,
    viewportWidth,
    viewportHeight,
}: Props) => {

    const camera = {
        x: player.x - viewportWidth / 2,
        y: player.y - viewportHeight / 2,
    };

    return camera;
}