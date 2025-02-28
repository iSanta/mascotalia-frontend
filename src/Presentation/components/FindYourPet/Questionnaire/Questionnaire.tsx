'use client';
import { Fragment } from "react";
import Image from "next/image";
import Style from "./Questionnaire.module.scss";
import Utils from "@/Presentation/design-system/utils/utils.module.scss";
import { Button, Form, Typography } from "@/Presentation/design-system";
import { questions } from "./Questions";
import useQuestionnaire from "@/Application/questionnaire/useQuestionnaire";

const Questionnaire = () => {
  const [form] = Form.useForm();
  const { questionNumber, questionnaireResponse, setQuestionNumber, onFinishQuestionnaire } = useQuestionnaire();
  const finishQuestions: boolean = questionNumber == questions(questionnaireResponse).questionnaireLength - 1;

  return (
    <Fragment>
      <Image
        src="/images/home/questionnaireLeft.svg"
        alt="Dog design"
        width={200}
        height={200}
        className={Style.questionnaireImageLeft}
      />

      <div className={Style.questionnaireContent}>
        <Typography.Title level={1} className={Utils.text_bg}>
          Encuentra tu mascota ideal
        </Typography.Title>

        <Typography.Paragraph className={Utils.text_bg}>
          ¡Haz match con tu nueva mascota! Responde una serie de preguntas y nosotros nos
          encargaremos del resto.
        </Typography.Paragraph>

        <div className={Style.questionnaireQuestions}>

          <Form form={form} name="questionnaire_form">
            {questions(questionnaireResponse).questionnaire[questionNumber]}
            <Form.Item label={null}>
              <Button type="primary" onClick={() => finishQuestions ? onFinishQuestionnaire() : setQuestionNumber(questionNumber + 1)}>
                {finishQuestions ? "Finalizar" : "Siguiente"}
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>

      <Image
        src="/images/home/questionnaireRight.svg"
        alt="Dog design"
        width={200}
        height={200}
        className={Style.questionnaireImageRight}
      />
    </Fragment>
  );
};

export default Questionnaire;
