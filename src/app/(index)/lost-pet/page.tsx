import LostPetsLayout from "@/Presentation/layout/lost-pet/LostPetsLayout/LostPetsLayout";
import { Suspense } from "react";
import { getSex } from "@/Infrastructure/sex/get-sex";
import { getSpecie } from "@/Infrastructure/specie/get-specie";
import { Sex } from "@/Domain/pet/sex/Sex";
import { Specie } from "@/Domain/pet/specie/Specie";
import { CommonResponse } from "@/Domain/common/CommonResponse";
import { City } from "@/Domain/city/City";
import { getCitiesByCountry } from "@/Infrastructure/city/get-cities-by-country";

const getFilters = async (): Promise<
    [CommonResponse<Sex[]>, CommonResponse<Specie[]>, CommonResponse<City[]>]
> => {
    return Promise.all([getSex(), getSpecie(), getCitiesByCountry()]);
};


export default async function lostPets() {
    const [sex, species, cities] = await getFilters();

    return (
        <Suspense fallback={<h1>Loading</h1>}>
            <LostPetsLayout sexes={sex} species={species} cities={cities} />
        </Suspense>
    );
}

