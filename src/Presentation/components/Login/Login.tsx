import React, { useEffect, useState } from 'react'
import useLogin from "@/Application/login/useLogin";
import { Card, Button, Checkbox, Form, Flex } from "@/Presentation/design-system"
import { Input } from 'antd';
import Style from './Login.module.scss'
import useNotification from '@/Application/utils/useNotification';
import useTranslate from '@/Application/translate/useTranslate';
import usePassword from '@/Application/auth/usePassword';


const Login = () => {
    const { login, errorMessage, errorKey } = useLogin();
    const { passwordRecovery, recoveryPasswordMessage } = usePassword();
    const [rememberPassword, setRememberPassword] = useState<boolean>(false);
    const { context, showNotification } = useNotification();
    const { t } = useTranslate();

    type FieldType = {
        username?: string;
        email?: string;
        password?: string;
        remember?: string;
    };

    const onFinish = async (values: { username: string, password: string }) => {

        if (!values.username || !values.password) {
            showNotification("error", "Por favor ingrese las credenciales", "Error de autenticación");
            return;
        }

        await login(values.username, values.password);
    }

    const recoveryPassword = (values: { email: string }) => {

        if (!values.email) {
            showNotification("error", "Por favor ingrese el usuario o correo", "Error de autenticación");
            return;
        }
        passwordRecovery(values.email);
    }

    useEffect(() => {
        if (!errorMessage) return;
        showNotification("error", t(errorMessage), "Error de autenticación");
    }, [errorMessage, errorKey])

    useEffect(() => {
        if (!recoveryPasswordMessage) return;
        showNotification(recoveryPasswordMessage.notificationType, t(recoveryPasswordMessage.message), "Recordar contraseña");
    }, [recoveryPasswordMessage])

    return (
        <>
            {context}
            <Card className={Style.card}>
                {
                    rememberPassword
                        ?
                        <Form
                            layout='vertical'
                            style={{ maxWidth: 600 }}
                            initialValues={{ remember: false, username: null, password: null }}
                            onFinish={recoveryPassword}
                            autoComplete="off"
                        >

                            <Form.Item<FieldType>
                                label="Usuario o Correo"
                                name="email"
                                rules={[{ required: true, message: 'Por favor ingresa tu usuario o correo!' }]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item label={null} style={{ marginBottom: 0 }}>
                                <Flex justify='space-between' wrap="wrap" className={Style.loginBtn}>
                                    <Button type="primary" htmlType="submit">
                                        Recordar contraseña
                                    </Button>
                                    <Button type="link" htmlType="button" onClick={() => setRememberPassword(false)}>
                                        Iniciar Sesión
                                    </Button>
                                </Flex>
                            </Form.Item>

                        </Form>
                        :
                        <Form
                            layout='vertical'
                            style={{ maxWidth: 600 }}
                            initialValues={{ remember: false, username: null, password: null }}
                            onFinish={onFinish}
                            autoComplete="off"
                        >
                            <Form.Item<FieldType>
                                label="Usuario o Correo"
                                name="username"
                                rules={[{ required: true, message: 'Por favor ingresa tu usuario!' }]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item<FieldType>
                                label="Contraseña"
                                style={{ marginTop: 'var(--spacing-M)' }}
                                name="password"
                                rules={[{ required: true, message: 'Por favor ingresa tu contraseña!' }]}
                            >
                                <Input.Password />
                            </Form.Item>

                            {/* <Form.Item<FieldType> name="remember" valuePropName="checked" label={null}>
                                    <Checkbox>Recuérdame</Checkbox>
                                </Form.Item> */}

                            <Form.Item label={null} style={{ marginBottom: 0 }}>
                                <Flex justify='space-between' wrap="wrap" className={Style.loginBtn}>
                                    <Button type="primary" htmlType="submit">
                                        Iniciar Sesión
                                    </Button>
                                    <Button type="link" htmlType="button" onClick={() => setRememberPassword(true)}>
                                        Olvidé mi contraseña
                                    </Button>
                                </Flex>
                            </Form.Item>
                        </Form>
                }


            </Card>
        </>
    )
}

export default Login