"use client";
import usePet from "@/Application/pet/usePet";
import { Button, Col, Row } from "antd";
import Image from "next/image";
import { useEffect, useMemo } from "react";
import { Sex } from "@/Domain/pet/sex/Sex";
import useSex from "@/Application/sex/useSex";
import { Specie } from "@/Domain/pet/specie/Specie";
import useSpecies from "@/Application/specie/useSpecies";
import { CommonResponse } from "@/Domain/common/CommonResponse";

const Adopt = ({
  sex,
  species,
}: {
  sex: CommonResponse<Sex[]>;
  species: CommonResponse<Specie[]>;
}) => {
  const { getPets, getPaginatedPets } = usePet();
  const { saveSex } = useSex();
  const { saveSpecies } = useSpecies();

  const petsMemo = useMemo(() => getPets().pagination, [getPets().pagination]);

  useEffect(() => {
    saveSex(sex);
    saveSpecies(species);
  }, []);

  return (
    <>
      <Row>
        <Col span={6} style={{ display: "flex", flexDirection: "column" }}>
          {/* <Filters /> */}
        </Col>
        <Col
          span={18}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "16px",
          }}
        >
          {petsMemo.value.items.map((pet) => (
            <div key={pet.id}>
              {pet.petImages.url && (
                <Image
                  src={`${process.env.NEXT_PUBLIC_BUCKET_S3}${pet.petImages.url}`}
                  width={200}
                  height={200}
                  priority
                  alt="Picture of the author"
                />
              )}
              {pet.foundationLogo && (
                <Image
                  src={`${process.env.NEXT_PUBLIC_BUCKET_S3}${pet.foundationLogo}`}
                  width={200}
                  height={200}
                  priority
                  alt="Picture of the author"
                />
              )}
              <h2>{pet.specie}</h2>
            </div>
          ))}
        </Col>
      </Row>
      <Row>
        <Col span={6}></Col>
        <Col span={18}>{`${petsMemo.value.pageNumber} / ${petsMemo.value.totalPages}`}</Col>
      </Row>
      <Row>
        <Col span={6}></Col>
        <Col span={18}>
          {petsMemo.value.pageNumber != petsMemo.value.totalPages &&
            petsMemo.value.totalCount > 0 && (
              <Button
                style={{ width: "100%" }}
                onClick={() => {
                  getPaginatedPets({ page: (petsMemo.value.pageNumber + 1).toString() });
                }}
              >
                Ver más
              </Button>
            )}
        </Col>
      </Row>
    </>
  );
};

export default Adopt;
