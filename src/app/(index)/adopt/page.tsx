import CatalogSection from "@/Presentation/layout/catalog/CatalogLayout";
import { getSex } from "@/Infrastructure/sex/get-sex";
import { getSpecie } from "@/Infrastructure/specie/get-specie";
import { Sex } from "@/Domain/pet/sex/Sex";
import { Specie } from "@/Domain/pet/specie/Specie";
import { CommonResponse } from "@/Domain/common/CommonResponse";
import { Suspense } from "react";
import { City } from "@/Domain/city/City";
import { getCitiesByCountry } from "@/Infrastructure/city/get-cities-by-country";

const getFilters = async (): Promise<
  [CommonResponse<Sex[]>, CommonResponse<Specie[]>, CommonResponse<City[]>]
> => {
  return Promise.all([getSex(), getSpecie(), getCitiesByCountry()]);
};

export default async function catalog() {
  const [sex, species, cities] = await getFilters();
  return (
    <Suspense>
      <CatalogSection sexes={sex} species={species} cities={cities} />
    </Suspense>
  );
}
