"use client";
import CatalogSection from "./CatalogSection";
import useSex from "@/Application/sex/useSex";
import useSpecies from "@/Application/specie/useSpecies";
import { useEffect } from "react";
import usePet from "@/Application/pet/usePet";
import Banner from "@/Presentation/components/Banner";
import { CommonResponse } from "@/Domain/common/CommonResponse";
import { Sex } from "@/Domain/pet/sex/Sex";
import { Specie } from "@/Domain/pet/specie/Specie";
import { City } from "@/Domain/city/City";
import useCity from "@/Application/city/useCity";
import useFoundation from "@/Application/foundation/useFoundation";
import useLocation from "@/Application/geo-location/useLocation";
import useQueryParams from "@/Application/query-params/useQueryParams";
import { queryParamsToObject } from "@/Application/utils/queryParamsToObject";
import { PetFilters } from "@/Domain/pet/PetFilters";
import FavoritePanel from "@/Presentation/components/common/Favorites/FavoritePanel/FavoritePanel";

type CatalogProps = {
  sexes: CommonResponse<Sex[]>;
  species: CommonResponse<Specie[]>;
  cities: CommonResponse<City[]>;
};

const CatalogLayout = ({ sexes, species, cities }: CatalogProps) => {
  const { userCity } = useLocation({ async: true });
  const { saveSex } = useSex();
  const { saveSpecies } = useSpecies();
  const { setCities } = useCity();
  const { getPaginatedPets } = usePet();
  const { getfoundationsByCity } = useFoundation();
  const { getParams } = useQueryParams();

  useEffect(() => {
    saveSex(sexes);
    saveSpecies(species);
    setCities(cities?.value);
  }, []);


  /*
    Cuando hay una respuesta de la ciudad, se ejecuta el método que
    muestra las mascotas y las fundaciones de esa ciudad,
    si la respuesta es vacía, se hace una petición genérica
    a todas las mascotas.

    Si adicionalmente hay ownerId en la URL se realiza la petición 
    teniendo en cuenta el dueño de la mascota (persona o fundación)
  */
  useEffect(() => {

    if (userCity === null) return;

    getfoundationsByCity(userCity);

    const params = queryParamsToObject(getParams());

    if (Object.entries(params).length) {
      getPaginatedPets({ ...params as PetFilters, city: userCity });
      return;
    }

    getPaginatedPets({ city: userCity, })

  }, [userCity]);

  return (
    <>
      <main>
        <Banner
          title="¿CÓMO PODEMOS AYUDAR?"
          description="Amar, proteger y velar por el bienestar de aquellos que no tienen una voz."
        ></Banner>
        <CatalogSection />
      </main>
      <FavoritePanel />
    </>

  );
};

export default CatalogLayout;
