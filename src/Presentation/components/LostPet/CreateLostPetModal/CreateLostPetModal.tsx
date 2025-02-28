import useSex from '@/Application/sex/useSex';
import useSpecies from '@/Application/specie/useSpecies';
import { Modal } from '@/Presentation/design-system';
import LostPetForm from '@/Presentation/LostPet/LostPetForm';
import React from 'react'

type CreateLostPetModalProps = {
    showModal: boolean;
    setShowModal: Function;
}

const CreateLostPetModal = ({ showModal, setShowModal }: CreateLostPetModalProps) => {

    const { getSex } = useSex();
    const { getSpecies } = useSpecies();

    return (
        <Modal
            title="Registrar animal perdido"
            style={{ minWidth: '40%' }}
            open={showModal}
            maskClosable={false}
            onCancel={() => setShowModal(false)}
            footer={null}
            destroyOnClose
        >
            <LostPetForm species={getSpecies().species} sexes={getSex().sex} />
        </Modal>
    )
}

export default CreateLostPetModal