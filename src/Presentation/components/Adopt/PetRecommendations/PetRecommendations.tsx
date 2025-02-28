import { Col, Flex, Typography } from "@/Presentation/design-system";
import Style from "./PetRecommendations.module.scss";
import { PetToAdopt } from "@/Domain/pet/PetToAdopt";
import CatalogCard from "@/Presentation/components/CatalogCard";

type PetRecommendationsProps = {
  title: string;
  subtitle?: string;
  pets: PetToAdopt[];
};

const PetRecommendations = ({ subtitle = "", title, pets }: PetRecommendationsProps) => {
  return (
    <Flex vertical gap={24} style={{ marginTop: 'var(--spacing-L)' }}>
      <Flex vertical align="center" className={Style.subtitles}>
        <Flex>
          <Typography.Title level={4}>{title}</Typography.Title>
        </Flex>
        <Typography.Paragraph>{subtitle}</Typography.Paragraph>
      </Flex>
      <Flex className={Style.sliderContainer}>
        <Flex gap={12} align="center" className={Style.cardContainer}>
          {pets.map((pet) => (
            <Col key={pet.id}>
              <CatalogCard
                id={pet.id}
                specie={pet.specie}
                sex={pet.sex}
                age={pet.age}
                weight={pet.weight}
                imageSrc={pet.petImages.url}
              />
            </Col>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default PetRecommendations;
