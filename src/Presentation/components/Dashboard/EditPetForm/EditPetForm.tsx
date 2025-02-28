import useEditPet from "@/Application/pet/useEditPet";
import useNotification from "@/Application/utils/useNotification";
import { EditPet } from "@/Domain/pet/detail/EditPet";
import {
  Button,
  Col,
  Form,
  InputNumber,
  Row,
  Skeleton,
  Switch,
  Upload,
  UploadOutlined,
} from "@/Presentation/design-system";
import { Input, UploadFile } from "antd";
import Style from "./EditPetForm.module.scss";
import usePetDetail from "@/Application/pet/usePetDetail";
import { NotificationResponse } from "@/Domain/common/notification/NotificationResponse";

const { TextArea } = Input;

type EditPetFormProps = {
  petId: string;
  setIsModalOpen: (isModalOpen: boolean) => void;
  onFinishEdit: (response: NotificationResponse) => void;
};

const EditPetForm = ({ petId, setIsModalOpen, onFinishEdit }: EditPetFormProps) => {
  const { pet } = usePetDetail(petId);
  const [form] = Form.useForm();
  const { edit, deleteImage } = useEditPet();
  const { showNotification, context } = useNotification();

  const normFile = (e) => {
    if (Array.isArray(e)) return e;
    return e?.fileList;
  };

  const defaultFileList: UploadFile[] = pet?.petImages?.map((image) => ({
    uid: image.url,
    name: image.id,
    status: "done",
    url: `${process.env.NEXT_PUBLIC_BUCKET_S3}${image.url}`,
  }));

  if (!pet) {
    return <Skeleton />;
  }

  return (
    <>
      {context}
      <Form
        form={form}
        name="edit_pet_form"
        onFinish={async (petToEdit: EditPet) => {
          let res = await edit(pet.id, petToEdit);
          onFinishEdit(res);
          setIsModalOpen(false);
        }}
        initialValues={{
          age: pet.age,
          description: pet.description,
          weight: pet.weight,
        }}
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 18 }}
        layout="horizontal"
        style={{ maxWidth: 800, margin: "0 auto" }}
      >

        <Form.Item label="Identificador" name="identifier">
          <Input
            min={0}
            max={100}
            placeholder={pet.identifier}
            style={{ width: "100%" }}
          />
        </Form.Item>

        <Form.Item label="Edad" name="age">
          <InputNumber
            min={0}
            max={100}
            placeholder={pet.age.toString()}
            style={{ width: "100%" }}
          />
        </Form.Item>

        <Form.Item label="Peso" name="weight">
          <InputNumber
            min={0}
            max={100}
            placeholder={pet.weight.toString()}
            style={{ width: "100%" }}
          />
        </Form.Item>

        <Row gutter={24}>
          <Col span={8}>
            <Form.Item
              label="Desparasitado"
              name="dewormed"
              valuePropName="checked"
              labelCol={{ span: 14 }}
              wrapperCol={{ span: 10 }}
            >
              <Switch defaultChecked={pet.dewormed} />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              label="Esterilizado"
              name="sterilized"
              valuePropName="checked"
              labelCol={{ span: 14 }}
              wrapperCol={{ span: 10 }}
            >
              <Switch defaultChecked={pet.sterilized} />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              label="Vacunado"
              name="vaccinated"
              valuePropName="checked"
              labelCol={{ span: 14 }}
              wrapperCol={{ span: 10 }}
            >
              <Switch defaultChecked={pet.vaccinated} />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item label="Descripción" name="description">
          <TextArea rows={4} placeholder={pet.description} />
        </Form.Item>

        <Form.Item
          label="Imagen"
          name="files"
          valuePropName="fileList"
          getValueFromEvent={normFile}
          rules={[{ required: false }]}
        >
          <Upload
            multiple
            name="petImages"
            listType="picture-card"
            className={Style.uploadThumbnail}
            defaultFileList={defaultFileList}
            maxCount={3}
            onRemove={async (file: UploadFile) => {
              const res = await deleteImage(file);
              showNotification(res.status, res.message);
            }}
            beforeUpload={() => false}
          >
            <Button icon={<UploadOutlined />}></Button>
          </Upload>
        </Form.Item>

        <Form.Item wrapperCol={{ span: 24 }} style={{ marginTop: "3em" }}>
          <Row justify="end" gutter={16}>
            <Col>
              <Button
                onClick={() => {
                  setIsModalOpen(false);
                }}
                style={{ backgroundColor: "#f5f5f5" }}
              >
                Cancelar
              </Button>
            </Col>
            <Col>
              <Button type="primary" htmlType="submit">
                Guardar
              </Button>
            </Col>
          </Row>
        </Form.Item>
      </Form>
    </>
  );
};

export default EditPetForm;
