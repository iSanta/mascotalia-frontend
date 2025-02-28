import useCreateBlog from "@/Application/blog/useCreateBlog";
import LoadingSpinner from "@/Presentation/components/common/LoadingSpinner";
import useNotification from "@/Application/utils/useNotification";
import { CreateBlog } from "@/Domain/blog/CreateBlog";
import { Tag } from "@/Domain/tag/Tag";
import { Button, Form, Input, Select, Upload, UploadOutlined } from "@/Presentation/design-system";
import TextArea from "antd/es/input/TextArea";

type CreateBlogFormProps = {
  tags: Tag[];
};

const CreateBlogForm = ({ tags }: CreateBlogFormProps) => {
  const { create, isLoading } = useCreateBlog();
  const { context, showNotification } = useNotification();
  const [form] = Form.useForm();

  return (
    <>
      {context}
      <Form
        form={form}
        name="create_blog_entry"
        onFinish={async (value: CreateBlog) => {
          const res = await create(value);
          showNotification(res.status, res.message);
        }}
        style={{ minWidth: "100%" }}
        autoComplete="off"
        initialValues={{ quote: "" }}
      >
        <LoadingSpinner loading={isLoading} />

        <Form.Item
          label="Título"
          name="title"
          rules={[{ required: true, type: "string", max: 150, min: 0 }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Entrada"
          name="entry"
          rules={[{ required: true, type: "string", max: 10000, min: 0 }]}
        >
          <TextArea maxLength={10000} />
        </Form.Item>

        <Form.Item
          label="Cita"
          name="quote"
          rules={[{ required: false, type: "string", max: 350, min: 0 }]}
        >
          <TextArea maxLength={350} />
        </Form.Item>

        <Form.Item label="Etiquetas" name="tags" rules={[{ required: true, type: "array" }]}>
          <Select
            filterOption={false}
            showSearch={false}
            mode="multiple"
            options={tags.map((tag) => ({
              value: tag.id,
              label: tag.value,
            }))}
          />
        </Form.Item>

        <Form.Item
          name={"files"}
          rules={[{ required: true, message: "Ingrese las imagenes del blog" }]}
          valuePropName="files"
        >
          <Upload listType="picture-card" multiple maxCount={3} beforeUpload={() => false}>
            <Button icon={<UploadOutlined />}></Button>
          </Upload>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>

    </>
  );
};

export default CreateBlogForm;
