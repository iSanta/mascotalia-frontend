"use client";
import { PetToAdopt } from "@/Domain/pet/PetToAdopt";
import { PetState } from "@/Domain/states/PetState";
import useSetPets from "@/Infrastructure/state-managment/actions/pet/useSetPets";
import useGetPets from "@/Infrastructure/state-managment/actions/pet/useGetPets";
import { PaginatedResponse } from "@/Domain/login/http/PaginatedResponse";
import useQueryParams from "../query-params/useQueryParams";
import { getFoundationPetsPaginated } from "@/Infrastructure/pet/get-foundation-pets-paginated";
import { CommonResponse } from "@/Domain/common/CommonResponse";
import { softDeletePet } from "@/Infrastructure/pet/soft-delete-pet";
import { NotificationResponse } from "@/Domain/common/notification/NotificationResponse";
import { PetFilters } from "@/Domain/pet/PetFilters";
import { withAuthTokenAsync } from "../auth/withAuthToken";
import { getRandomPetId } from "@/Infrastructure/pet/get-random-pet-id";
import { useRouter } from "next/navigation";

const usePet = () => {
  const { setPets } = useSetPets();
  const { getParam } = useQueryParams();
  const { get, getStorePets } = useGetPets();
  const { push } = useRouter();

  const savePets = (pets: CommonResponse<PaginatedResponse<PetToAdopt[]>>) => {
    setPets(pets);
  };

  const getPets = (): PetState => {
    return getStorePets();
  };

  const callGetPets = (params?: PetFilters, filtered?: boolean) => {
    get(params, filtered);
  };

  /**
   * Obtiene una lista paginada de mascotas.
   *
   * @param {PetFilters} [filters] - Objeto que define los filtros que se pueden usar.
   * @param {boolean} [filtered] - Indica si los elementos deben reemplazarse (true) o agregarse al final (false).
   * @returns {Promise<void>} - Una promesa que se resuelve cuando se completan las operaciones de obtención.
   */

  const getPaginatedPets = (filters: PetFilters = {}, replace: boolean = true) => {
    const validateFilters: PetFilters = {};

    //Para validar que el filtro que llegue si existe y no llegue null, vacío o undefined
    for (let filter in filters) {
      if (filters.hasOwnProperty(filter) && filters[filter])
        validateFilters[filter] = filters[filter];
    }
    callGetPets(validateFilters, replace);
  };

  const foundationPetsPaginated = async (page?: number, identifier?: string) => {
    const getPetsWithAuth = withAuthTokenAsync<typeof getFoundationPetsPaginated>(
      getFoundationPetsPaginated
    );

    if (!getPetsWithAuth) return;

    const pets = await getPetsWithAuth({
      page: page || Number(getParam("page")) || 1,
      identifier,
    });

    savePets(pets);
  };

  const setPetStateToDelete = async (
    id: string,
    isDeleted: boolean = true
  ): Promise<NotificationResponse> => {
    const softDeletePetWithAuth = withAuthTokenAsync<typeof softDeletePet>(softDeletePet);

    const res = await softDeletePetWithAuth(id, isDeleted);
    return {
      status: res.success ? "success" : "error",
      message: res.message,
    };
  };

  const getRandomPet = async () => {
    const response = await getRandomPetId();
    response.success && push(`/adopt/detail/${response.value.specie.toLowerCase()}/${response.value.id}`);
  }

  return {
    savePets,
    getStorePets,
    callGetPets,
    getPets,
    getPaginatedPets,
    foundationPetsPaginated,
    setPetStateToDelete,
    getRandomPet
  };
};

export default usePet;
