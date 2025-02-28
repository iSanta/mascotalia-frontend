import React, { useState } from "react";
import usePet from "@/Application/pet/usePet";
import { PaginatedResponse } from "@/Domain/login/http/PaginatedResponse";
import { PetToAdopt } from "@/Domain/pet/PetToAdopt";
import {
  Button,
  DeleteOutlined,
  EditOutlined,
  ExclamationCircleOutlined,
  Flex,
  Pagination,
  Table,
} from "@/Presentation/design-system";
import Image from "next/image";
import Link from "next/link";
import EditPetModal from "../EditPetModal";
import useNotification from "@/Application/utils/useNotification";
import useQueryParams from "@/Application/query-params/useQueryParams";
import checkImageExist from "@/Application/utils/checkImageExist";

type PetsTableProps = {
  pets: PaginatedResponse<PetToAdopt[]>;
};

const PetsTable = ({ pets }: PetsTableProps) => {
  const { foundationPetsPaginated, setPetStateToDelete } = usePet();
  const [actualPage, setActualPage] = useState<number>(1);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [petId, setPetId] = useState<string>("");
  const { showNotification, context } = useNotification();
  const { setParms, getParam } = useQueryParams();

  const dataSource = pets.value.items.map((pet, index) => {
    return {
      key: index,
      id: pet.id,
      identifier: pet.identifier,
      image: checkImageExist(pet.petImages),
      age: pet.age,
      dewormed: pet.dewormed,
      sterilized: pet.sterilized,
      vaccinated: pet.vaccinated,
      specie: pet.specie,
      sex: pet.sex,
      isDeleted: pet.isDeleted,
    };
  });

  const columns = [
    {
      title: "Foto",
      dataIndex: "image",
      key: "image",
      width: 100,
      render: (url: string, record: PetToAdopt) => (
        <Link href={`/adopt/detail/${record.specie.toLowerCase()}/${record.id}`}>
          <Image
            priority
            src={url}
            alt={"Pet"}
            width={130}
            height={130}
            style={{ objectFit: "cover", borderRadius: "8px" }}
          />
        </Link>
      ),
    },
    {
      title: "Edad",
      dataIndex: "age",
      key: "age",
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: "Identificador",
      dataIndex: "identifier",
      key: "identifier",
    },
    {
      title: "Desparasitado",
      dataIndex: "dewormed",
      key: "dewormed",
      render: (dewormed: boolean) => (dewormed ? "Si" : "No"),
      sorter: (a, b) => b.dewormed - a.dewormed,
    },
    {
      title: "Esterilizado",
      dataIndex: "sterilized",
      key: "sterilized",
      render: (sterilized: boolean) => (sterilized ? "Si" : "No"),
      sorter: (a, b) => b.sterilized - a.sterilized,
    },
    {
      title: "Vacunado",
      dataIndex: "vaccinated",
      key: "vaccinated",
      render: (vaccinated: boolean) => (vaccinated ? "Si" : "No"),
      sorter: (a, b) => b.vaccinated - a.vaccinated,
    },
    {
      title: "Especie",
      dataIndex: "specie",
      key: "specie",
      sorter: (a, b) => a.specie.localeCompare(b.specie),
    },
    {
      title: "Sexo",
      dataIndex: "sex",
      key: "sex",
      sorter: (a, b) => a.sex.localeCompare(b.sex),
    },
    {
      title: "¿Se ha borrado?",
      dataIndex: "isDeleted",
      key: "isDeleted",
      render: (isDeleted: boolean) => (isDeleted ? "Si" : "No"),
      sorter: (a, b) => a.isDeleted - b.isDeleted,
    },
    {
      title: "Borrar",
      dataIndex: "isDeleted",
      key: "isDeleted",
      width: 100,
      render: (_, record: PetToAdopt) => (
        <>
          {record.isDeleted ? (
            <Button
              style={{
                backgroundColor: "#FFA500",
                borderColor: "#FFA500",
                color: "#fff",
              }}
              icon={<ExclamationCircleOutlined />}
              onClick={async () => {
                const res = await setPetStateToDelete(record.id, false);
                showNotification(res.status, res.message);
                foundationPetsPaginated(actualPage);
              }}
            >
              Renovar
            </Button>
          ) : (
            <Button
              type="primary"
              danger
              icon={<DeleteOutlined />}
              onClick={async () => {
                const res = await setPetStateToDelete(record.id);
                showNotification(res.status, res.message);
                foundationPetsPaginated(actualPage);
              }}
            >
              Borrar
            </Button>
          )}
        </>
      ),
    },
    {
      title: "Editar",
      dataIndex: "edit",
      key: "edit",
      width: 100,
      render: (_, record: PetToAdopt) => (
        <Button
          icon={<EditOutlined />}
          disabled={record.isDeleted}
          onClick={() => {
            setOpenModal(true);
            setPetId(record.id);
          }}
          style={
            record.isDeleted
              ? {
                backgroundColor: "#e6f7ff",
                borderColor: "#b3d8ff",
                color: "#b3b3b3",
              }
              : {
                backgroundColor: "#1890FF",
                borderColor: "#1890FF",
                color: "#fff",
              }
          }
        >
          Editar
        </Button>
      ),
    },
  ];

  return (
    <div style={{ marginTop: 'var(--spacing-XL)' }}>
      {context}
      {petId && (
        <EditPetModal isModalOpen={openModal} petId={petId} setIsModalOpen={setOpenModal} />
      )}
      <Table dataSource={dataSource} columns={columns} pagination={false} />
      <Flex justify="center">
        <Pagination
          onChange={async (e) => {
            await foundationPetsPaginated(e);
            setActualPage(e);
            setParms("page", e.toString());
          }}
          maxPages={pets.value.totalPages}
          initialCurrentPage={Number(getParam("page")) || 1}
        />
      </Flex>
    </div>
  );
};

export default PetsTable;
