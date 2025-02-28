'use client';
import Style from './PasswordRecoveryLayout.module.scss'
import usePassword from "@/Application/auth/usePassword";
import useTranslate from '@/Application/translate/useTranslate';
import useNotification from '@/Application/utils/useNotification';
import { Button, Card, Flex, Form } from "@/Presentation/design-system"
import { Input } from 'antd';
import { useEffect } from 'react';


const PasswordRecoveryLayout = ({ token }: { token: string }) => {
    const { updatePassword, updatePasswordMessage } = usePassword();
    const { context, showNotification } = useNotification();
    const { t } = useTranslate();

    const onFinish = (values: { password: string }) => {
        updatePassword(token, values.password);
    }

    useEffect(() => {
        if (!updatePasswordMessage) return;
        showNotification(updatePasswordMessage.notificationType, t(updatePasswordMessage.message), "Recordar contraseña");
    }, [updatePasswordMessage])

    return (
        <main className={Style.passwordRecoveryContainer}>
            {context}
            <Flex align="center" justify="center" style={{ height: '100vh' }}>
                <Card title={t('Change password')} style={{ width: '50vw', padding: 'var(--spacing-M)' }}>
                    <Form
                        layout='vertical'
                        style={{ minWidth: '40%' }}
                        initialValues={{ remember: false, username: null, password: null }}
                        onFinish={onFinish}
                        autoComplete="off"

                    >
                        <Form.Item<{ password: string }>
                            label="Contraseña"
                            style={{ marginTop: 'var(--spacing-L)' }}
                            name="password"
                            rules={[
                                { required: true, message: 'Por favor ingresa tu contraseña!' },
                                { min: 8, message: 'La contraseña debe tener al menos 8 caracteres' },
                                ({ getFieldValue }) => ({
                                    validator(_, value) {
                                        if (!value) return Promise.resolve();

                                        const strongPasswordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{6,}$/;

                                        if (!strongPasswordRegex.test(value)) {
                                            return Promise.reject(
                                                new Error('La contraseña debe incluir mayúsculas, minúsculas, un número y un símbolo')
                                            );
                                        }
                                        return Promise.resolve();
                                    }
                                })
                            ]}
                        >
                            <Input.Password style={{ width: '100%' }} />
                        </Form.Item>


                        <Form.Item<{ repeatPassword: string }>
                            label="Repetir Contraseña"
                            style={{ marginTop: 'var(--spacing-L)' }}
                            name="repeatPassword"
                            dependencies={['password']}
                            rules={[
                                { required: true, message: 'Por favor ingresa tu contraseña!' },
                                ({ getFieldValue }) => ({
                                    validator(_, value) {
                                        if (!value || getFieldValue('password') === value) {
                                            return Promise.resolve();
                                        }
                                        return Promise.reject(new Error('Las contraseñas no coinciden!'));
                                    }
                                })
                            ]}
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item label={null} style={{ marginTop: 'var(--spacing-L)' }}>
                            <Flex justify='space-between' wrap="wrap">
                                <Button type="primary" htmlType="submit">
                                    Actualizar Contraseña
                                </Button>
                            </Flex>
                        </Form.Item>
                    </Form>
                </Card>

            </Flex>

        </main>
    )
}

export default PasswordRecoveryLayout