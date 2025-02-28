import React, { useState } from 'react'
import Style from './CreatePetSection.module.scss'
import { Col, Row, Typography, Flex, Select, Checkbox, Button, } from '@/Presentation/design-system'
import { Radio, Input, Tooltip, Upload, App } from 'antd';
import type { RadioChangeEvent } from 'antd';
import type { UploadProps } from 'antd';
import useAuth from "@/Application/auth/useAuth";

const { Text } = Typography
const { TextArea } = Input

interface NumericInputProps {
  style: React.CSSProperties;
  value: string;
  onChange: (value: string) => void;
}

const NumericInput = (props: NumericInputProps) => {
  const { value, onChange } = props;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value: inputValue } = e.target;
    const reg = /^-?\d*(\.\d*)?$/;
    if (reg.test(inputValue) || inputValue === '' || inputValue === '-') {
      onChange(inputValue);
    }
  };

  return (
    <Tooltip>
      <Input
        {...props}
        onChange={handleChange}
        placeholder="1"
        maxLength={2}
      />
    </Tooltip>
  );
};

const CreatePetSection = () => {
  //useAuth({ authorizedRoles: ["Admin", "Foundation"] });
  const { message } = App.useApp();
  const [sexValue, setSex] = useState(1);
  const [ageValue, setAge] = useState(1);
  const [numInputValue, setnumInputValue] = useState('');

  const onChangeSex = (e: RadioChangeEvent) => {
    setSex(e.target.value);
  };

  const onChangeAge = (e: RadioChangeEvent) => {
    setAge(e.target.value);
  };

  const props: UploadProps = {
    name: 'file',
    multiple: true,
    action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
    onChange(info) {
      const { status } = info.file;
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    beforeUpload: (file) => {
      const isValidType = ['image/png', 'image/jpeg', 'image/jpg'].includes(file.type);

      if (!isValidType) {
        message.error(`${file.name} no es un archivo válido. Solo se permiten PNG, JPG y JPEG.`);
      }

      return isValidType || Upload.LIST_IGNORE;
    },
  };

  return (
    <Flex gap={24} vertical>
      <Row gutter={[16, 24]}>
        <Col xs={24} sm={24} lg={12}>
          <Flex vertical gap='large'>
            <Flex vertical align='flex-start' gap='small'>
              <Text type='secondary'>
                Nombre
              </Text>
              <Input maxLength={28} />
            </Flex>
            <Flex vertical align='flex-start' gap='small'>
              <Text type='secondary'>
                Sexo
              </Text>
              <Radio.Group
                value={sexValue}
                onChange={onChangeSex}
                options={[
                  { value: 'male', label: "Masculino" },
                  { value: 'female', label: "Femenino" },
                ]}
              />
            </Flex>
            <Flex vertical align='flex-start' gap='small'>
              <Text type='secondary'>
                Edad
              </Text>
              <Flex wrap align='center' gap='middle' style={{ width: '100%' }} >
                <NumericInput style={{ width: 124 }} value={numInputValue} onChange={setnumInputValue} />
                <Radio.Group
                  value={ageValue}
                  onChange={onChangeAge}
                  options={[
                    { value: 'months', label: "Meses" },
                    { value: 'years', label: "Años" },
                  ]}
                />
              </Flex>
            </Flex>
            <Flex align='flex-start' gap='small'>
              <Flex vertical align='flex-start' gap='small' flex={1}>
                <Text type='secondary'>
                  Especie
                </Text>
                <Select
                  defaultValue="cat"
                  style={{ height: 48, textAlign: "left", width: "100%" }}
                  options={[
                    { value: 'cat', label: 'Gato' },
                    { value: 'dog', label: 'Perro' },
                  ]}
                />
              </Flex>
              <Flex vertical align='flex-start' gap='small' flex={1}>
                <Text type='secondary'>
                  Raza
                </Text>
                <Select
                  defaultValue="race1"
                  style={{ height: 48, textAlign: "left", width: "100%" }}
                  options={[
                    { value: 'race1', label: 'Race1' },
                    { value: 'race2', label: 'Race2' },
                  ]}
                />
              </Flex>
            </Flex>
            <Flex vertical align='flex-start' gap='small'>
              <Text type='secondary'>
                Descripción
              </Text>
              <TextArea
                showCount
                maxLength={420}
                style={{ height: 290, resize: 'none' }}
              />
            </Flex>
          </Flex>
        </Col>
        <Col xs={24} sm={24} lg={12}>
          <Flex vertical gap='large'>
            <Flex vertical gap='large'>
              <Flex vertical align='flex-start' gap='small'>
                <Text type='secondary'>
                  Otros datos del animal
                </Text>
                <Flex wrap gap='small'>
                  <Checkbox>Desesterilizado</Checkbox>
                  <Checkbox>Vacunado</Checkbox>
                  <Checkbox>Desparacitado</Checkbox>
                </Flex>
              </Flex>
            </Flex>
            <Flex vertical gap='large'>
              <Flex vertical align='flex-start' gap='small'>
                <Text type='secondary'>
                  Carnet de vacunación (si lo tiene)
                </Text>
                <Upload {...props} listType='picture' maxCount={1} className={Style.uploadContainer}>
                  <Button color='primary' variant='dashed' className={Style.buttonUpload} style={{ borderColor: 'var(--color-info)', }}>
                    <Flex align='center' justify='center'>
                      <Text className={Style.textUpload} style={{ fontSize: 16 }}>
                        Arrastre o seleccione para subir archivos .png, .jpg o .jpeg
                      </Text>
                    </Flex>
                  </Button>
                </Upload>
              </Flex>
            </Flex>
            <Flex vertical gap='large'>
              <Flex vertical align='flex-start' gap='small'>
                <Text type='secondary'>
                  Imágenes
                </Text>
                <Upload
                  {...props}
                  listType='picture'
                  maxCount={5}
                  className={Style.uploadContainer}
                >
                  <Button color='primary' variant='dashed' className={Style.buttonUpload} style={{ borderColor: 'var(--color-info)', }}>
                    <Flex align='center' justify='center'>
                      <Text className={Style.textUpload} style={{ fontSize: 16 }}>
                        Arrastre o seleccione para subir archivos .png, .jpg o .jpeg
                      </Text>
                    </Flex>
                  </Button>
                </Upload>
              </Flex>
            </Flex>
          </Flex>
        </Col>
      </Row>
      <Row>
        <Flex className={Style.flexSaveBtn}>
          <Button color='default' type='primary' className={Style.saveBtn}>Guardar cambios</Button>
        </Flex>
      </Row>
    </Flex>
  )
}

export default CreatePetSection