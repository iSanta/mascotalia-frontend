"use client";
import React from "react";
import { MinusCircleOutlined, PlusOutlined, UploadOutlined } from "@ant-design/icons";
import {
  Button,
  Form,
  Input,
  InputNumber,
  Select,
  Space,
  Upload,
} from "@/Presentation/design-system";
import useAuth from "@/Application/auth/useAuth";
import { Switch } from "../design-system";
import LoadingSpinner from "../components/common/LoadingSpinner";
import useCreatePet from "@/Application/pet/useCreatePet";
import { CreatePet } from "@/Domain/pet/CreatePet";
import useNotification from "@/Application/utils/useNotification";
import useTranslate from "@/Application/translate/useTranslate";
import TextArea from "antd/es/input/TextArea";

const CreatePetForm = () => {
  useAuth({ authorizedRoles: ["Admin", "Foundation"] });
  const { t } = useTranslate();
  const { isLoading, create } = useCreatePet();
  const { context, showNotification } = useNotification();
  const [form] = Form.useForm();
  return (
    <Form
      form={form}
      name="dynamic_form_nest_item"
      onFinish={async (values: CreatePet) => {
        const res = await create(values);
        showNotification(res.status, res.message);
        form.resetFields();
      }}
      style={{
        minWidth: "100%",
      }}
      autoComplete="off"
      initialValues={{ Dewormed: false, Vaccinated: false, Sterilized: false, Identifier: "", Weight: 0 }}
    >
      {context}
      <LoadingSpinner loading={isLoading} />
      <Form.List name="pets">
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name, ...restField }) => (
              <Space
                key={key}
                style={{ display: "flex", marginBottom: 8 }}
                size="large"
                align="center"
              >
                <Form.Item
                  {...restField}
                  name={[name, "specie"]}
                  rules={[{ required: true, message: "Seleccionar especie" }]}
                >
                  <Select
                    placeholder={t("Specie")}
                    options={[
                      { value: 1, label: "Canine" },
                      { value: 2, label: "Feline" },
                    ]}
                  />
                </Form.Item>
                <Form.Item
                  {...restField}
                  name={[name, "sex"]}
                  rules={[{ required: true, message: t("Select pet sex") }]}
                >
                  <Select
                    placeholder={t("Sex")}
                    options={[
                      { value: 1, label: "Male" },
                      { value: 2, label: "Female" },
                    ]}
                  />
                </Form.Item>
                <Form.Item
                  {...restField}
                  name={[name, "identifier"]}
                  rules={[{ type: "string" }]}
                >
                  <Input size="small" placeholder={t("Identifier")} />
                </Form.Item>

                <Form.Item
                  {...restField}
                  name={[name, "age"]}
                  rules={[{ required: true, message: t("Enter the pet age") }]}
                >
                  <InputNumber min={0} placeholder={t("Age")} />
                </Form.Item>

                <Form.Item
                  {...restField}
                  name={[name, "size"]}
                  rules={[{ required: true, message: t("Select the pet size") }]}
                >
                  <Select
                    placeholder={t("Size")}
                    options={[{ id: 1, value: t('Big') }, { id: 2, value: t('Medium') }, { id: 3, value: t('Small') }].map((size) => ({
                      value: size.id,
                      label: size.value,
                    }))} />
                </Form.Item>

                <Form.Item
                  {...restField}
                  name={[name, "weight"]}
                  rules={[{ required: false, message: t("Enter the pet weight") }]}
                >
                  <InputNumber min={0} max={100} placeholder={t("Weight")} />
                </Form.Item>

                <Form.Item
                  {...restField}
                  name={[name, "description"]}
                  rules={[{ required: true, message: t("Input pet description"), max: 5000 }]}
                >
                  <TextArea placeholder={t("Description")} />
                </Form.Item>

                <Form.Item
                  label={t("Dewormed")}
                  name={[name, "dewormed"]}
                  valuePropName="checked"
                >
                  <Switch />
                </Form.Item>

                <Form.Item
                  label={t("Vaccinated")}
                  name={[name, "vaccinated"]}
                  valuePropName="checked"
                >
                  <Switch />
                </Form.Item>

                <Form.Item
                  label={t("Sterilized")}
                  name={[name, "sterilized"]}
                  valuePropName="checked"
                >
                  <Switch />
                </Form.Item>

                <Form.Item
                  {...restField}
                  name={[name, "files"]}
                  valuePropName="petImages"
                  rules={[{ required: true, message: t("Input pet images") }]}
                >
                  <Upload multiple listType="picture-circle" maxCount={3} beforeUpload={() => false}>
                    <Button icon={<UploadOutlined />}></Button>
                  </Upload>
                </Form.Item>
                <MinusCircleOutlined onClick={() => remove(name)} />
              </Space>
            ))}
            <Form.Item>
              <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                {t("Add pet")}
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          {t("Submit pets")}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CreatePetForm;
