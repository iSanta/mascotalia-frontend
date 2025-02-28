import { Typography, Flex, Slider, Select, Button } from "@/Presentation/design-system";
import useSex from "@/Application/sex/useSex";
import useSpecies from "@/Application/specie/useSpecies";
import usePetFilters from "@/Application/pet/usePetFilters";
import usePetAgeSlider from "@/Application/pet/usePetAgeSlider";
import { Radio } from "antd";
import useFilters from "@/Application/filters/useFilters";
import useCity from "@/Application/city/useCity";
import useLocation from "@/Application/geo-location/useLocation";
import useFoundation from "@/Application/foundation/useFoundation";
import useTranslate from "@/Application/translate/useTranslate";
import { OrderingType } from "@/Domain/common/Ordering";
import { PetSizes } from "@/Domain/pet/size/PetSizes";

const { Title, Text, Paragraph } = Typography;

type CatalogFilterProps = {
  callOnReset: Function
  showFilterByAge?: boolean
  showFilterBySex?: boolean
};

const CatalogFilter = ({ showFilterByAge = true, showFilterBySex = true, callOnReset }: CatalogFilterProps) => {
  const { getSex } = useSex();
  const { getSpecies } = useSpecies();
  const { setFilters, resetFilters } = useFilters();
  const { getCities } = useCity();
  const { foundations, getfoundationsByCity } = useFoundation();
  const { userCity } = useLocation({ async: true });
  const [specie, setSpecie, initialSpecie] = usePetFilters<string>("Elegir especie");
  const [sex, setSex, initialSex] = usePetFilters<string>("Elegir sexo");
  const [size, setSize, initialSize] = usePetFilters<string>("Elegir tamaño");
  const [orderByAge, setOrderByAge] = usePetFilters<number>(null);
  const [orderByCreateDate, setOrderByCreateDate] = usePetFilters<number>(null);
  const [foundation, setFoundation, initialFoundation] = usePetFilters<string>("Elegir fundación");
  const [minValue, setMinValue, maxValue, setMaxValue, resetSlider] = usePetAgeSlider(0, 5);
  const { t } = useTranslate();

  return (
    <Flex vertical wrap gap={16}>
      {showFilterByAge &&
        <Flex vertical wrap gap={16}>
          <Title level={4}>Ordenar por</Title>

          <Radio.Group
            onChange={(e) => {
              setOrderByAge(e.target.value);
              setFilters({ param: "ordering", value: { property: "age", type: e.target.value } });
            }}
            value={orderByAge}
          >
            <Flex vertical gap={8}>
              <Radio value={OrderingType.Ascending}>Menor edad</Radio>
              <Radio value={OrderingType.Descending}>Mayor edad</Radio>
            </Flex>
          </Radio.Group>
          <Radio.Group
            onChange={(e) => {
              setOrderByCreateDate(e.target.value);
              setFilters({ param: "ordering", value: { property: "createdAt", type: e.target.value } });
            }}
            value={orderByCreateDate}
          >
            <Flex vertical gap={8}>
              <Radio value={OrderingType.Descending}>Más reciente</Radio>
              <Radio value={OrderingType.Ascending}>Más antiguo</Radio>
            </Flex>
          </Radio.Group>
        </Flex>}

      <Flex vertical wrap gap={16}>
        <Title level={4}>Filtrar por</Title>

        <Flex vertical wrap gap={16}>
          {showFilterByAge && <Flex vertical gap={8}>
            <Paragraph strong>Edad</Paragraph>
            <Text>
              Entre {minValue} - {maxValue} años
            </Text>
            <Slider
              range
              value={[minValue, maxValue]}
              style={{ width: 200 }}
              onChangeComplete={(value) => {
                const minAge = value[0].toString();
                const maxAge = value[1].toString();
                setFilters({ param: "minAge", value: minAge });
                setFilters({ param: "maxAge", value: maxAge });
              }}
              onChange={(value) => {
                setMinValue(value[0]);
                setMaxValue(value[1]);
              }}
            />
          </Flex>}

          {showFilterBySex &&
            <Flex vertical gap={8}>
              <Paragraph strong>Sexo</Paragraph>

              <Select
                style={{ width: 200 }}
                onChange={(
                  value,
                  option: { value: number; label: string } | { value: number; label: string }[]
                ) => {
                  if (!Array.isArray(option)) {
                    setSex(option.label);
                    setFilters({ param: "sex", value });
                  }
                }}
                value={sex}
                options={getSex().sex?.map((sex) => ({
                  value: sex.id,
                  label: t(sex.value),
                }))}
              />
            </Flex>}


          <Flex vertical gap={8}>
            <Paragraph strong>Tamaño</Paragraph>

            <Select
              style={{ width: 200 }}
              onChange={(
                value,
                option: { value: number; label: string } | { value: number; label: string }[]
              ) => {
                if (!Array.isArray(option)) {
                  setSize(option.label);
                  setFilters({ param: "size", value });
                }
              }}
              value={size}
              options={PetSizes.map((petSize) => ({
                value: petSize.value,
                label: t(petSize.label),
              }))}
            />
          </Flex>


          <Flex vertical gap={8}>
            <Paragraph strong>Especie</Paragraph>
            <Select
              style={{ width: 200 }}
              onChange={(
                value,
                option: { value: number; label: string } | { value: number; label: string }[]
              ) => {
                if (!Array.isArray(option)) {
                  setSpecie(option.label);
                  setFilters({ param: "specie", value });
                }
              }}
              value={specie}
              options={getSpecies().species?.map((specie) => ({
                value: specie.id,
                label: t(specie.type),
              }))}
            />
          </Flex>
          <Flex vertical gap={8}>
            <Paragraph strong>Fundación</Paragraph>
            <Select
              style={{ width: 200 }}
              value={foundation}
              placeholder="Fundación"
              onChange={async (foundationId: string) => {
                setFilters({ param: "foundationId", value: foundationId });
                setFoundation(foundationId);
              }}
              showSearch
              filterOption={(input, option) =>
                (option?.label as string).toLowerCase().includes(input.toLowerCase())
              }
              options={foundations().foundations?.map((foundation) => ({
                value: foundation.id,
                label: foundation.foundationName,
              }))}
            />
          </Flex>
          <Flex vertical gap={8}>
            <Paragraph strong>Localidad</Paragraph>

            <Select
              style={{ width: 200 }}
              onChange={async (cityId: number) => {
                setFilters({ param: "cityId", value: cityId.toString() });
                getfoundationsByCity(cityId);
                setFoundation(null);
              }}
              showSearch
              filterOption={(input, option) =>
                (option?.label as string).toLowerCase().includes(input.toLowerCase())
              }
              placeholder={userCity && userCity !== "not found" ? userCity : "Eliga una ciudad"}
              options={getCities().cities?.map((city) => ({
                value: city.id,
                label: city.name,
              }))}
            />
          </Flex>
          <Flex vertical style={{ width: 200, marginTop: "1em" }}>
            <Button
              type="primary"
              size="small"
              htmlType="submit"
              onClick={() => {
                callOnReset()
                resetFilters();
                resetSlider();
                setOrderByAge(null);
                setOrderByCreateDate(null);
                setSex(initialSex);
                setSize(initialSize);
                setSpecie(initialSpecie);
                setFoundation(initialFoundation);
              }}
            >
              Reiniciar Filtros
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default CatalogFilter;
