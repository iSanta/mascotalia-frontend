import { Form, InputNumber, Select, Typography } from "@/Presentation/design-system";
import Style from "./Questionnaire.module.scss";
import { JSX, RefObject } from "react";
import { QuestionnaireResponse } from "@/Domain/questionnaire/QuestionnaireResponse";


export const questions = (questionnaireResponse: RefObject<QuestionnaireResponse>): { questionnaire: Record<number, JSX.Element>, questionnaireLength: number } => {

    const QUESTIONS: Record<number, JSX.Element> = {
        0: <>
            <Typography.Paragraph className={Style.question}>
                Primero queremos saber tu edad
            </Typography.Paragraph>

            <div className={Style.input}>
                <Form.Item>
                    <InputNumber
                        style={{ width: '100%' }}
                        min={1}
                        placeholder="Digita tu edad"
                        size="large"
                        type="number" />
                </Form.Item>
            </div>
        </>,
        1: <>
            <Typography.Paragraph className={Style.question}>
                ¿Qué te gusta más?
            </Typography.Paragraph>

            <div className={Style.input}>
                <Form.Item name='specie' style={{ width: '100%' }}>
                    <Select
                        size="large"
                        placeholder="Selecciona"
                        onChange={value => questionnaireResponse.current = { ...questionnaireResponse.current, specie: value === 3 ? null : value }}
                        options={[{ id: 1, value: 'Perro' }, { id: 2, value: 'Gato' }, { id: 3, value: '¡Todos!' }].map((specie) => ({
                            value: specie.id,
                            label: specie.value,
                        }))} />
                </Form.Item>
            </div>
        </>,
        2: <>
            <Typography.Paragraph className={Style.question}>
                ¿Te gustaría que tu nuevo compañero/a sea un macho o hembra? O si no tienes preferencia, ¡está bien también!
            </Typography.Paragraph>

            <div className={Style.input}>
                <Form.Item name='sex' style={{ width: '50%' }}>
                    <Select
                        size="large"
                        placeholder="Selecciona"
                        onChange={value => questionnaireResponse.current = { ...questionnaireResponse.current, sex: value === 3 ? null : value }}
                        options={[{ id: 1, value: 'Macho' }, { id: 2, value: 'Hembra' }, { id: 3, value: 'No tengo preferencia' }].map((sex) => ({
                            value: sex.id,
                            label: sex.value,
                        }))} />
                </Form.Item>
            </div>
        </>,
        3: <>
            <Typography.Paragraph className={Style.question}>
                ¿Prefieres una mascota grande o pequeña? Es importante que tengas en cuenta el tamaño del hogar donde vivirá.
            </Typography.Paragraph>

            <div className={Style.input}>
                <Form.Item name='size' style={{ width: '50%' }}>
                    <Select
                        size="large"
                        placeholder="Selecciona"
                        onChange={value => questionnaireResponse.current = { ...questionnaireResponse.current, size: value === 4 ? null : value }}
                        options={[{ id: 1, value: 'Grande' }, { id: 2, value: 'Mediano' }, { id: 3, value: 'Pequeño' }, { id: 4, value: 'Sin preferencia' }].map((size) => ({
                            value: size.id,
                            label: size.value,
                        }))} />
                </Form.Item>
            </div>
        </>,
    }
    return {
        questionnaire: QUESTIONS,
        questionnaireLength: Object.keys(QUESTIONS).length
    };
}