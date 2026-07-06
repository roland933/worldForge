import { CancelButton } from "../../shared/actions/CancelButton/CancelButton";
import Button from "../../ui/Button/Button";
import { ButtonVariants } from "../../ui/Button/buttonVariants";
import { Modal } from "../../ui/Modal/Modal";
import { ModalContent } from "../../ui/Modal/ModalContent";
import { ModalFooter } from "../../ui/Modal/ModalFooter";
import { ModalHeader } from "../../ui/Modal/ModalHeader";
import { AssetForm } from "../AssetForm/AssetForm";

export function CreateAssetModal({isOpen,onClose,onSubmit}) {

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalHeader>
                Create new asset
            </ModalHeader>

            <ModalContent>
                    <AssetForm onSubmit={onSubmit}/>
            </ModalContent>

            <ModalFooter>
                 <Button >Create</Button>
                 <CancelButton onClose={onClose}/>
            </ModalFooter>
            
         
        </Modal>
)

}