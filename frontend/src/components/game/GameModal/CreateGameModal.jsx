import { Modal } from "../../ui/Modal/Modal";
import { GameForm } from "../GameForm/GameForm";

export function CreateGameModal({isOpen,onClose,onSubmit}) {

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <GameForm onSubmit={onSubmit}/>
        </Modal>
)

}