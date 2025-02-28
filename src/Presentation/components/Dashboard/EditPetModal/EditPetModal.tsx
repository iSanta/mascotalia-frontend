import { Modal, Skeleton } from "@/Presentation/design-system";
import React from "react";
import EditPetForm from "../EditPetForm";
import useNotification from "@/Application/utils/useNotification";

type EditPetModalProps = {
  petId: string;
  isModalOpen: boolean;
  setIsModalOpen: (isModalOpen: boolean) => void;
};

const EditPetModal = ({ petId, isModalOpen, setIsModalOpen }: EditPetModalProps) => {
  const { showNotification, context } = useNotification();

  return (
    <>
      {context}
      <Modal
        title="Editar mascota"
        width={800}
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
        destroyOnClose
      >
        <>
          {petId ? (
            <EditPetForm
              petId={petId}
              setIsModalOpen={setIsModalOpen}
              onFinishEdit={(res) => showNotification(res.status, res.message)}
            />
          ) : (
            <Skeleton />
          )}
        </>
      </Modal>
    </>
  );
};

export default EditPetModal;
