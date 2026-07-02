import { AssetCard } from "../../components/assets/AssetCard/AssetCard";
import { AssetFilter } from "../../components/assets/AssetFilter/AssetFilter";
import { AssetGrid } from "../../components/assets/AssetGrid/AssetGrid";
import { CreateAssetModal } from "../../components/assets/CreateAssetModal/CreateAssetModal";
import PageHeader from "../../components/layout/PageHeader";
import Button from "../../components/ui/Button/Button";
import { ButtonVariants } from "../../components/ui/Button/buttonVariants";
import { SearchInput } from "../../components/ui/SearchInput/SearchInput";
import DashboardLayout from "../../layouts/DashboardLayout";
import { getAssets } from "../../services/assets/assetService";
import { useState } from "react";

export function Assets() {
    const assets = getAssets();

        const [isCreateOpen, setIsCreateOpen] = useState(false);
    
        const handleOpenModal = () => {
            setIsCreateOpen(true)
    
        }
    
        const handleCloseModal = () => {
            setIsCreateOpen(false)
        }

    return(
        <DashboardLayout>
            <CreateAssetModal isOpen={isCreateOpen} onClose={handleCloseModal}/>
            <PageHeader title="Assets" >

                  <Button variant={ButtonVariants.SECONDARY} onClick={handleOpenModal}>New asset</Button>
            </PageHeader>

              <AssetFilter />

              <AssetGrid >
                {assets.map(asset => (
                    <AssetCard key={asset.id} asset={asset} />
                ))}

              </AssetGrid>

        </DashboardLayout>

    )


}