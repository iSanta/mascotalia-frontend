"use client";
import { Specie } from "@/Domain/pet/specie/Specie";
import MapProvier from "../Map/MapProvier";
import { Checkbox, Form, Input, Select, Typography, Upload } from "antd";
import type { FormProps } from "antd";
import { Sex } from "@/Domain/pet/sex/Sex";
import { useEffect, useState } from "react";
import useLostPet from "@/Application/lost-pet/useLostPet";
import { UploadOutlined } from "@ant-design/icons";
import { Button, Col, InputNumber, Row, Space } from "../design-system";
import TextArea from "antd/es/input/TextArea";
import { CreateLostPet } from "@/Domain/lost-pet/CreateLostPet";
import useTranslate from "@/Application/translate/useTranslate";

const LostPetForm = ({
  species,
  sexes,
}: {
  species: Specie[];
  sexes: Sex[];
}) => {
  const { getLostPetLocation, insertLostPet } = useLostPet();
  const [form] = Form.useForm();
  const { t } = useTranslate();
  const [coordinatesError, setCoordinatesError] = useState<string>("");

  const onFinish: FormProps["onFinish"] = async (values: CreateLostPet) => {
    await insertLostPet(values);
  };
  console.log(coordinatesError);
  const onFinishFailed: FormProps["onFinishFailed"] = (errorInfo) => {
    const coordinates = errorInfo.errorFields[0].name[0];

    if (coordinates === "latitude" || coordinates === "longitude") {
      setCoordinatesError("Por favor clickee en el mapa una zona aproximada donde se perdió la mascota");
    }
  };

  useEffect(() => {
    form.setFieldsValue(getLostPetLocation());
  }, [getLostPetLocation()]);

  return (
    <>
      <Form
        form={form}
        name="basic"
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
        style={{ width: '100%' }}
        initialValues={{
          latitude: 0,
          longitude: 0,
          wasFound: false
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Row gutter={[24, 24]} style={{ marginTop: '2em' }}>
          <Col span={8}>
            <Form.Item
              label={t("Specie")}
              name="specieId"
              rules={[{ required: true, message: t("Input", { inputMessage: t('InputSpecie') }) }]}
            >
              <Select
                options={species.map((specie) => ({
                  value: specie.id,
                  label: t(specie.type),
                }))}
              />
            </Form.Item>
          </Col>
          <Col span={8}>

            <Form.Item
              label={t("Size")}
              name="sizeId"
              rules={[{ required: true, message: t("Input", { inputMessage: t('InputSize') }) }]}
            >
              <Select
                placeholder="Tamaño"
                options={[{ id: 1, value: 'Grande' }, { id: 2, value: 'Mediano' }, { id: 3, value: 'Pequeño' }].map((size) => ({
                  value: size.id,
                  label: size.value,
                }))} />
            </Form.Item>
          </Col>
          <Col span={8}>

            <Form.Item
              label={t("Sex")}
              name="sexId"
              rules={[{ required: true, message: t("Input", { inputMessage: t('InputSex') }) }]}
            >
              <Select
                options={sexes.map((sex) => ({
                  value: sex.id,
                  label: t(sex.value),
                }))}
              />
            </Form.Item>
          </Col>
        </Row>


        <Row gutter={[24, 24]}>
          <Col span={8}>
            <Form.Item
              label={t("Pet Name")}
              name="name"
              rules={[{ required: true, message: t("Input", { inputMessage: t('InputPetName') }) }]}
            >
              <Input size="small" />
            </Form.Item>
          </Col>

          <Col span={8}>
            <Form.Item
              label={t("Pet Age")}
              name="age"
              rules={[{ required: true, type: 'number', message: t("Input", { inputMessage: t('PetAge') }) }]}
              style={{ width: "100%" }}
            >
              <InputNumber min={0} style={{ width: "100%" }} />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              label={t("Contact Name")}
              name="contactName"
              rules={[{ required: true, message: t("Input", { inputMessage: t('InputUsername') }) }]}
            >
              <Input size="small" />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item
          label={t("Description")}
          name="description"
          rules={[{ required: true, message: t("Input", { inputMessage: t('PetDescription') }) }]}
        >
          <TextArea maxLength={10000} />
        </Form.Item>

        <Row gutter={[24, 24]}>
          <Col span={12}>
            <Form.Item
              label={t("Contact phone")}
              name="contactPhone"
              rules={[{ required: true, message: t("Input", { inputMessage: t('ContactPhone') }) }]}
              style={{ width: "100%" }}
            >
              <InputNumber style={{ width: "100%" }} />
            </Form.Item>
          </Col>
          <Col span={12}>

            <Form.Item
              label={t("Lost Address")}
              name="lostAddress"
              rules={[{ required: true, message: t("Input", { inputMessage: t('LostAddress') }) }]}
              style={{ width: "100%" }}
            >
              <Input size="small" />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={[24, 24]}>
          <Col span={12}>
            <Form.Item
              label="Fotos de la mascota"
              name={"files"}
              valuePropName="lostpetImages"
              rules={[{ required: true, message: t("Input", { inputMessage: t('PetImages') }) }]}>
              <Upload listType="picture-card" maxCount={3} multiple beforeUpload={() => false}>
                <Button icon={<UploadOutlined />}></Button>
              </Upload>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="¿Fue encontrado?"
              name="wasFound"
              style={{ width: "100%" }}
              valuePropName="checked"
            >
              <Checkbox />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item
          name="latitude"
          hidden
          rules={[
            {
              required: true,
              message: "Por favor ingresa una cantidad.",
            },
            {
              validator: (_, value) => {
                if (value !== 0) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error("El valor no debe ser igual a 0."));
              },
            },
          ]}
        >
          <Input type="hidden" />
        </Form.Item>
        <Form.Item
          name="longitude"
          hidden
          rules={[
            {
              required: true,
              message: "Por favor ingresa una cantidad.",
            },
            {
              validator: (_, value) => {
                if (value !== 0) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error("El valor no debe ser igual a 0."));
              },
            },
          ]}
        >
          <Input type="hidden" />
        </Form.Item>

        <MapProvier />

        {coordinatesError !== "" &&
          <div style={{ marginTop: 'var(--spacing-XS )' }}>
            <Typography.Text style={{ color: 'var(--color-error)' }}>{coordinatesError}</Typography.Text>
          </div>
        }

        <Row gutter={[24, 24]} style={{ marginTop: '2em' }}>
          <Col span={24}>
            <Form.Item>
              <Button style={{ width: '100%' }} type="primary" htmlType="submit">
                Enviar
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>


    </>
  );
};

export default LostPetForm;
