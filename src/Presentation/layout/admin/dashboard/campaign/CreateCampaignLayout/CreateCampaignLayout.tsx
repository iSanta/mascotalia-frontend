'use client';
import useCampaign from '@/Application/campaign/useCampaign';
import useTranslate from '@/Application/translate/useTranslate';
import useNotification from '@/Application/utils/useNotification';
import { CreateCampaign } from '@/Domain/campaign/CreateCampaign';
import LoadingSpinner from '@/Presentation/components/common/LoadingSpinner';
import { Button, Col, DatePicker, Form, Input, InputNumber, Row, Switch, Upload, UploadOutlined } from '@/Presentation/design-system';
import TextArea from 'antd/es/input/TextArea';
import React from 'react'

const CreateCampaignLayout = () => {
    const [form] = Form.useForm();
    const { create, isLoading } = useCampaign();
    const { context, showNotification } = useNotification();
    const { t } = useTranslate();

    return (
        <Form
            form={form}
            name="dynamic_form_nest_item"
            onFinish={async (values) => {

                const res = await create(
                    {
                        ...values,
                        startDate: values.startDate.toISOString(),
                        endDate: values.endDate.toISOString()
                    }
                );
                showNotification(res.status, res.message);
                form.resetFields();
            }}
            style={{
                minWidth: "100%",
            }}
            autoComplete="off"
            initialValues={{ isActive: true }}
        >
            <LoadingSpinner loading={isLoading} />
            {context}
            <Row gutter={[24, 24]}>
                <Col span={12}>
                    <Form.Item
                        label={t("Title")}
                        name="title"
                        rules={[{ required: true, type: "string", max: 200, min: 0 }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label={t("Description")}
                        name="description"
                        rules={[{ required: true, type: "string", max: 5000, min: 0 }]}
                    >
                        <TextArea />
                    </Form.Item>

                    <Form.Item
                        label={t("Start Date")}
                        name="startDate"
                        rules={[{ required: true, type: "date" }]}
                    >
                        <DatePicker />
                    </Form.Item>

                    <Form.Item
                        label={t("End Date")}
                        name="endDate"
                        rules={[{ required: true, type: "date" }]}
                    >
                        <DatePicker />
                    </Form.Item>

                    <Form.Item
                        label={t("Location")}
                        name="location"
                        rules={[{ required: true, type: "string", max: 150, min: 0 }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label={t("Location Address")}
                        name="locationAddress"
                        rules={[{ required: true, type: "string", max: 150, min: 0 }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label={t("Max Volunteers")}
                        name="maxVolunteers"
                        rules={[{ required: true, type: "number", min: 1 }]}
                    >
                        <InputNumber min={1} />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item
                        name={"file"}
                        valuePropName="campaignImage"
                        rules={[{ required: true, message: t("Input campaign image") }]}
                    >
                        <Upload listType="picture-card" maxCount={1} beforeUpload={() => false}>
                            <Button icon={<UploadOutlined />}></Button>
                        </Upload>
                    </Form.Item>
                </Col>
            </Row>

            <Button type="primary" htmlType="submit">
                {t("Create Campaign")}
            </Button>

        </Form >
    )
}

export default CreateCampaignLayout