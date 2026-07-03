import { CancelButton } from "../../shared/actions/CancelButton/CancelButton";
import Button from "../../ui/Button/Button";
import { Modal } from "../../ui/Modal/Modal";
import { ModalContent } from "../../ui/Modal/ModalContent";
import { ModalFooter } from "../../ui/Modal/ModalFooter";
import { ModalHeader } from "../../ui/Modal/ModalHeader";
import { TaskForm } from "../TaskForm/TaskForm";

export function TaskCreateModal({isOpen,onClose,onSubmit}) {
 return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalHeader>
                Create new Task
            </ModalHeader>

            <ModalContent>
                    <TaskForm onSubmit={onSubmit}/>
            </ModalContent>

            <ModalFooter>
                 <Button >Create</Button>
                 <CancelButton onClose={onClose}/>
            </ModalFooter>
            
         
        </Modal>
)


}