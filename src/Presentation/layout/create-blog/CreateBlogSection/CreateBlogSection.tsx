import React from 'react'
import { Col, Row, Typography, Flex, Button, Message } from '@/Presentation/design-system'
import {Input, Upload, App } from 'antd';
import type { UploadProps } from '@/Presentation/design-system'
import Style from './CreateBlogSection.module.scss'

const { Text } = Typography
const { TextArea } = Input

const props: UploadProps = {
    name: 'file',
    multiple: true,
    action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
    onChange(info) {
        const { status } = info.file;
        if (status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (status === 'done') {
            Message.success(`${info.file.name} file uploaded successfully.`);
        } else if (status === 'error') {
            Message.error(`${info.file.name} file upload failed.`);
        }
    },
    onDrop(e) {
        console.log('Dropped files', e.dataTransfer.files);
    },
};

const CreateBlogSection = () => {
    //useAuth({ authorizedRoles: ["Admin", "Foundation"] });
    const { message } = App.useApp();

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
                                Enlace
                            </Text>
                            <Input placeholder='https://www.instagram.com/' maxLength={117} />
                        </Flex>
                        <Flex vertical align='flex-start' gap='small'>
                            <Text type='secondary'>
                                Descripción
                            </Text>
                            <TextArea
                                showCount
                                maxLength={420}
                                style={{ height: 348, resize: 'none' }}
                            />
                        </Flex>
                    </Flex>
                </Col>
                <Col xs={24} sm={24} lg={12}>
                    <Flex vertical gap='large'>
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

export default CreateBlogSection