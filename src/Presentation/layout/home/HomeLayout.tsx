import FindYourPet from "@/Presentation/components/FindYourPet";
import Banner from "@/Presentation/components/Banner";
import AdultsSection from "./AdultsSection";
import VolunteeringSection from "./VolunteeringSection";
import HomeFooter from "./HomeFooter";
import BlogsSection from "./BlogsSection";

const HomeLayout = () => {
  return (
    <main>
      <FindYourPet skip={false} />
      <VolunteeringSection />
      <AdultsSection />

      <Banner
        title="¿CÓMO PODEMOS AYUDAR?"
        description="Amar, proteger y velar por el bienestar de aquellos que no tienen una voz."
      />

      <BlogsSection />
      <HomeFooter />
    </main>
  );
};

export default HomeLayout;
