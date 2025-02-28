"use client";
import React from 'react'
import Style from './RecomendationSection.module.scss'
import Utils from "@/Presentation/design-system/utils/utils.module.scss"
import { Flex, Row, Col, Typography, Button, Divider } from "@/Presentation/design-system"
import { MdOutlinePets } from "react-icons/md";
import { HiOutlinePaperAirplane } from "react-icons/hi";


type RecomendationProps = {
    name?: string
    specie?: string
    recomendations?: string[]
}

const RecomendationSection = ({ recomendations }: { recomendations: RecomendationProps }) => {
    return (
        <Flex vertical gap={20} className={Utils.container}>
            <Flex vertical gap={8} align='center' className={Style.header}>
                <Typography.Title level={3}>
                    Recomendaciones
                </Typography.Title>
                <Typography.Paragraph className={`${Utils.text_detail} ${Style.subtitle}`}>
                    Estos son algunos tips de cuidado que debes tener en cuenta si deseas adoptar a {recomendations.name}
                </Typography.Paragraph>
            </Flex>
            <Divider className={Style.divider} />
            <Row gutter={[24, 24]}>
                {recomendations.recomendations.map((text, index) => (
                    <Col key={index} span={24} md={12}>
                        <Flex gap={12}>
                            <Flex className={Style.recomendationIcon}>
                                <MdOutlinePets style={{ color: "var(--color-primary)" }} />
                            </Flex>
                            <Typography.Paragraph>
                                {text}
                            </Typography.Paragraph>
                        </Flex>
                    </Col>
                ))}
            </Row>
            <Flex justify='center' className={Style.header}>
                <Button type='primary' icon={<HiOutlinePaperAirplane size={18}/>}>
                    Leer más sobre el cuidado de los {recomendations.specie}
                </Button>
            </Flex>
        </Flex>
    )
}

export default RecomendationSection;