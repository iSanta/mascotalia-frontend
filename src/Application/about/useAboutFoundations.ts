import { getRandomFoundations } from "@/Infrastructure/about/get-random-foundations";
import useLocation from "../geo-location/useLocation";
import { useState } from "react";
import { AboutFoundations } from "@/Domain/about/AboutFoundations";

const useAboutFoundations = () => {
  const { getUserCity } = useLocation();
  const [foundations, setFoundations] = useState<AboutFoundations[]>([]);

  const getFoundations = async (): Promise<void> => {
    const city: string = await getUserCity();
    setFoundations((await getRandomFoundations(city)).value);
  };

  return { getFoundations, foundations };
};

export default useAboutFoundations;
