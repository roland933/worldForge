import { CancelButton } from "../../shared/actions/CancelButton/CancelButton";
import Button from "../../ui/Button/Button";
import { ButtonVariants } from "../../ui/Button/buttonVariants";
import { Modal } from "../../ui/Modal/Modal";
import { ModalContent } from "../../ui/Modal/ModalContent";
import { ModalFooter } from "../../ui/Modal/ModalFooter";
import { ModalHeader } from "../../ui/Modal/ModalHeader";
import { GameForm } from "../GameForm/GameForm";

export function CreateGameModal({isOpen,onClose,onSubmit,onChange,values,errors}) {

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalHeader>
                Create new forge
            </ModalHeader>

      
            <GameForm onSubmit={onSubmit} values={values} onChange={onChange} onClose={onClose} errors={errors}/>

         
        </Modal>
)

}