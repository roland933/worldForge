import { useState,useEffect } from "react";
import { GameList } from "../../components/game/GameList/GameList";
import PageHeader from "../../components/layout/PageHeader";
import Button from "../../components/ui/Button/Button";
import { ButtonVariants } from "../../components/ui/Button/buttonVariants";
import { SearchInput } from "../../components/ui/SearchInput/SearchInput";
import DashboardLayout from "../../layouts/DashboardLayout";
import { getForges, createForge } from "../../services/forgeServices";
import { CreateGameModal } from "../../components/game/GameModal/CreateGameModal";
import { GameFilter } from "../../components/game/GameFilter/GameFilter";
import { GenerateForgeModal } from "../../components/game/GenerateForgeModal/GenerateForgeModal";

export function Forges() {

        const initialForm = {
            name: "",
            world_id: "",
            description: ""
    };
    const [isCreateOpen, setIsCreateOpen] = useState(false);
    const [isGenerateOpen, setIsGenerateOpen] = useState(false);
    const [errors, setErrors] = useState({});
    const [form, setForm] = useState( initialForm );
    const [forges, setForges] = useState([]);
    

        useEffect(() => {

            async function loadForges() {

                const data = await getForges();

                setForges(data);

            }

            loadForges();

        }, []);



    const handleOpenModal = () => {
        setIsCreateOpen(true)

    }


    const handleGenerateModal = () => {
        setIsGenerateOpen(true)

    }

    const handleGenerateCloseModal = () => {
        setIsGenerateOpen(false)

    }


    const handleCloseModal = () => {
        setIsCreateOpen(false)
        setErrors({})
        
    }



    const handleCreateForge = async (e) => {
            e.preventDefault();
            try {
            const forge = await createForge(form);

            const data = await getForges();

            setForges(data);

            handleCloseModal();
            setForm({ ...initialForm });
            }catch(error) {
                 if (error.response.status === 422) {

        setErrors(error.response.data.errors);

        return;
    }

    alert("Something went wrong.");
            }
        

    };

    const handleChange = (field, value) => {

    setForm(prev => ({
        ...prev,
        [field]: value
    }));

};

    return(
        <DashboardLayout>
            <CreateGameModal 
                    isOpen={isCreateOpen} 
                    onClose={ handleCloseModal} 
                    onSubmit={handleCreateForge}
                    onCancel={handleCloseModal}
                    onChange={handleChange}
                    errors={errors} 
                    values={form}
            />

            <GenerateForgeModal 
                isOpenorgeModal 
                isOpen={isGenerateOpen}
                onClose={handleGenerateCloseModal}
            
            />

            <PageHeader title="Forges" >

                <Button variant={ButtonVariants.SECONDARY} onClick={handleOpenModal}>New forge</Button>
                <Button variant={ButtonVariants.SECONDARY} onClick={handleGenerateModal}>Generate forge</Button>
            </PageHeader>


           <GameFilter />

          
            <GameList games={forges} />
            

        </DashboardLayout>

    )


}