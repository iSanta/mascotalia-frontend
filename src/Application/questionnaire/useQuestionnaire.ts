import { QuestionnaireResponse } from '@/Domain/questionnaire/QuestionnaireResponse';
import { useRef, useState } from 'react'
import { redirect } from 'next/navigation'

const useQuestionnaire = () => {
  let [questionNumber, setQuestionNumber] = useState<number>(0);
  const questionnaireResponse = useRef<QuestionnaireResponse>({ age: null, specie: null, sex: null, size: null });

  const onFinishQuestionnaire = () => {
    const responses = questionnaireResponse.current;
    Object.keys(responses).forEach(key => responses[key] === null && delete responses[key]);
    const params = new URLSearchParams(questionnaireResponse.current as {}).toString();
    redirect(`/adopt?${params}`);
  };

  return {
    questionnaireResponse,
    questionNumber,
    setQuestionNumber,
    onFinishQuestionnaire
  }
}

export default useQuestionnaire