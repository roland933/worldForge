import { CancelButton } from "../../shared/actions/CancelButton/CancelButton";
import { ModalProps } from "../../shared/types/ModalProps";
import Button from "../../ui/Button/Button";
import { Modal } from "../../ui/Modal/Modal";
import { ModalContent } from "../../ui/Modal/ModalContent";
import { ModalFooter } from "../../ui/Modal/ModalFooter";
import { ModalHeader } from "../../ui/Modal/ModalHeader";
import { PromptLibraryForm } from "../PromptLibraryForm/PromptLibraryForm";


export function PromptLibraryCreateModal({isOpen,onClose,onSubmit}:ModalProps) {
    return(
       <Modal isOpen={isOpen} onClose={onClose}>
        <ModalHeader>
            Create prompt
        </ModalHeader>
        <ModalContent>
            <PromptLibraryForm onSubmit={onSubmit}/>
        </ModalContent>
        <ModalFooter>
           <Button>Create</Button>
            <CancelButton onClose={onClose}/>
        </ModalFooter>

       </Modal>
    )

}