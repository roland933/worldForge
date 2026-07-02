import { CancelButton } from "../../shared/actions/CancelButton/CancelButton";
import Button from "../../ui/Button/Button";
import { ButtonVariants } from "../../ui/Button/buttonVariants";
import { Modal } from "../../ui/Modal/Modal";
import { ModalContent } from "../../ui/Modal/ModalContent";
import { ModalFooter } from "../../ui/Modal/ModalFooter";
import { ModalHeader } from "../../ui/Modal/ModalHeader";
import { GameForm } from "../GameForm/GameForm";

export function CreateGameModal({isOpen,onClose,onSubmit}) {

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalHeader>
                Create new forge
            </ModalHeader>

            <ModalContent>
                    <GameForm onSubmit={onSubmit}/>
            </ModalContent>

            <ModalFooter>
                 <Button >Start forging</Button>
                 <CancelButton onClose={onClose}/>
            </ModalFooter>
            
         
        </Modal>
)

}