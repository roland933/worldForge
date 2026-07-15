import { useEffect } from "react";
import { Direction } from "../components/shared/types/Direction";

type MovePlayer = (direction: Direction) => void;

export const useKeyboard = (
    movePlayer: MovePlayer,
    setPressedKey: React.Dispatch<React.SetStateAction<Set<string>>>
) => {

    useEffect(() => {

        const handleKeyDown = (e: KeyboardEvent) => {

            setPressedKey(prev => {
                const next = new Set(prev);
                next.add(e.code);
                return next;
            });

            switch (e.code) {
                case "KeyW":
                    movePlayer("up");
                    break;
                case "KeyA":
                    movePlayer("left");
                    break;
                case "KeyS":
                    movePlayer("down");
                    break;
                case "KeyD":
                    movePlayer("right");
                    break;
            }
        };

        const handleKeyUp = (e: KeyboardEvent) => {

            setPressedKey(prev => {
                const next = new Set(prev);
                next.delete(e.code);
                return next;
            });

        };

        window.addEventListener("keydown", handleKeyDown);
        window.addEventListener("keyup", handleKeyUp);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            window.removeEventListener("keyup", handleKeyUp);
        };

    }, [movePlayer, setPressedKey]);
};