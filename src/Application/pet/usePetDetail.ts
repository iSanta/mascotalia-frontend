import { useEffect, useState } from "react";
import { Pet } from "@/Domain/pet/detail/Pet";
import { getPetDetail } from "@/Infrastructure/pet/detail/get-pet-detail";

const usePetDetail = (id: string) => {
  const [pet, setPet] = useState<Pet>(null);

  const getDetail = async (id: string) => {
    const pet = (await getPetDetail(id)).value;
    setPet(pet);
  };

  useEffect(() => {
    getDetail(id);
  }, [id]);

  return { getDetail, pet };
};

export default usePetDetail;
