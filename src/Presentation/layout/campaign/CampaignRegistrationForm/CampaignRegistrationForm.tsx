import useTranslate from '@/Application/translate/useTranslate';
import useNotification from '@/Application/utils/useNotification';
import useVolunteer from '@/Application/volunteer/useVolunteer';
import { CreateVolunteer } from '@/Domain/volunteer/CreateVolunteer';
import LoadingSpinner from '@/Presentation/components/common/LoadingSpinner';
import { Button, Col, Form, Input, InputNumber, Row, Typography } from '@/Presentation/design-system'
import React from 'react'

type CampaignRegistrationFormProps = {
    campaignId: string;
}

const CampaignRegistrationForm = ({ campaignId }: CampaignRegistrationFormProps) => {
    const [form] = Form.useForm();
    const { t } = useTranslate();
    const { context, showNotification } = useNotification();
    const { create, isLoading } = useVolunteer();

    return (
        <div>
            <Typography.Title style={{ marginTop: "0.3em" }}>Quiero Inscribirme</Typography.Title>

            <Form
                form={form}
                name="campaign_registration"
                onFinish={async (values) => {
                    const res = await create(values as CreateVolunteer);
                    showNotification(res.status, res.message);
                    form.resetFields();
                }}
                initialValues={{ campaignId }}
                autoComplete="on"
            >

                <LoadingSpinner loading={isLoading} />
                {context}
                <Row gutter={[24, 24]}>
                    <Col span={24}>

                        <Form.Item
                            name="campaignId"
                        >
                            <Input type="hidden" />
                        </Form.Item>

                        <Form.Item
                            label={t("Name")}
                            name="name"
                            rules={[{ required: true, type: "string", max: 100, min: 0 }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label={t("Contact Phone")}
                            name="contactPhone"
                            rules={[{ required: true, type: "string", max: 15, min: 5 }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label={t("Email")}
                            name="email"
                            rules={[{ required: true, type: "email", min: 0 }]}
                        >
                            <Input />
                        </Form.Item>

                        <Button type="primary" htmlType="submit">
                            {t("Register")}
                        </Button>
                    </Col>
                </Row>
            </Form>

        </div >
    )
}

export default CampaignRegistrationForm