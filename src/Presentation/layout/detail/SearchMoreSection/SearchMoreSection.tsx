"use client";
import Style from "./SearchMoreSection.module.scss";
import { Flex } from "@/Presentation/design-system";
import PetRecommendations from "@/Presentation/components/Adopt/PetRecommendations";
import { PetToAdopt } from "@/Domain/pet/PetToAdopt";

const SearchMoreSection = ({ pets, oldPets }: { pets: PetToAdopt[]; oldPets: PetToAdopt[] }) => {
  return (
    <Flex vertical gap={64} className={Style.container}>
      {pets && pets.length && (
        <PetRecommendations
          pets={pets}
          title="Compañeros para Toda la Vida: ¡Adopta Hoy!"
          subtitle="Desde cachorros hasta adultos, cada animal tiene un amor único que ofrecer. Encuentra tu compañero ideal y cambia una vida para siempre"
        />
      )}
      {oldPets && oldPets.length && (
        <PetRecommendations
          pets={oldPets}
          title="Más Allá de los Años: Compañeros Eternos"
          subtitle="Dale una segunda oportunidad a un amigo fiel. Adopta hoy y disfruta del amor incondicional de un compañero para toda la vida"
        />
      )}
    </Flex>
  );
};

export default SearchMoreSection;
