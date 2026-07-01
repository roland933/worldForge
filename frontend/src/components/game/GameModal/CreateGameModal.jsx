import { Modal } from "../../ui/Modal/Modal";
import { GameForm } from "../GameForm/GameForm";

export function CreateGameModal({handleSubmit}) {

    return (
        <Modal>
            <GameForm handleSubmit={handleSubmit}/>
        </Modal>
)

}