import { useState } from "react";

import { Modal } from "../../ui/Modal/Modal";
import { ModalHeader } from "../../ui/Modal/ModalHeader";
import { ModalContent } from "../../ui/Modal/ModalContent";
import { ModalFooter } from "../../ui/Modal/ModalFooter";

import { Form } from "../../ui/Form/Form";
import { FormField } from "../../ui/Form/FormField";
import { Input } from "../../ui/Form/Input/Input";
import { Select } from "../../ui/Form/Select/Select";

import { ButtonVariants } from "../../ui/Button/buttonVariants";
import Button from "../../ui/Button/Button";
import { generateForge } from "../../../services/forgeServices";



export function GenerateForgeModal({
    isOpen,
    onClose,
}) {

    const [projectName, setProjectName] = useState("");
    const [template, setTemplate] = useState("react-ts");
    const [mapSize, setMapSize] = useState("medium");


    const handleGenerate = async() => {
        try {    
        await generateForge({projectName,template,mapSize})
       

        onClose();
        }catch(error) {

        }
    };

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
        >
            <ModalHeader>
                Generate Forge
            </ModalHeader>

            <ModalContent>

                <Form>

                    <FormField label="Project Name">
                        <Input
                            value={projectName}
                            onChange={(e) => setProjectName(e.target.value)}
                            placeholder="Pandora"
                        />
                    </FormField>

                    <FormField
                        label="Template"
                        className="mt-5"
                    >
                        <Select
                            value={template}
                            onChange={(e) => setTemplate(e.target.value)}
                        >
                            <option value="react-ts">
                                React + TypeScript
                            </option>
                        </Select>
                    </FormField>

                    <FormField
                        label="Map Size"
                        className="mt-5"
                    >
                        <Select
                            value={mapSize}
                            onChange={(e) => setMapSize(e.target.value)}
                        >
                            <option value="small">
                                Small
                            </option>

                            <option value="medium">
                                Medium
                            </option>

                            <option value="large">
                                Large
                            </option>
                        </Select>
                    </FormField>

                </Form>

            </ModalContent>

            <ModalFooter>

                <Button
                    variant={ButtonVariants.SECONDARY}
                    onClick={onClose}
                >
                    Cancel
                </Button>

                <Button onClick={handleGenerate}>
                    Generate Forge
                </Button>

            </ModalFooter>

        </Modal>
    );
}