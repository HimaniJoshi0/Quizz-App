
import { apiRequest } from '@/lib/api';
import CommonButton from '@/lib/components/Button';
import CommonSelect from '@/lib/components/CommonSelect';
import CustomeModal from '@/lib/components/CustomModal';
import Input from '@/lib/components/Input';
import useStore from '@/lib/store/store';
import { CommonResponse, QuizzDataTypes } from '@/lib/types';
import { yupResolver } from '@hookform/resolvers/yup';
import { Typography } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react'
import { useForm } from 'react-hook-form';
import * as yup from 'yup'


interface QuizForm {
  topic: string
  timeLimit: number
  numberOfQuestions: number
  level: string
}

const CreateQuiz = () => {
  const router = useRouter()
  const schema = yup.object().shape({
    topic: yup.string().required('Topic is required'),
    timeLimit: yup.number().typeError("Enter a valid time limit").required('Time limit is required'),
    numberOfQuestions: yup.number().typeError("Enter a valid number of numberOfQuestions").required('Time limit is required'),
    level: yup.string().required('Level is required'),
  })
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<QuizForm>({
    resolver: yupResolver(schema),
    defaultValues: {

    }
  })
  const {updateQuizzData}=useStore()
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleformSubmit = async (data: QuizForm) => {
    try {
      const response = await apiRequest<CommonResponse<QuizzDataTypes>, QuizForm>({
        method: "POST", path: "/gemini/createQuizz/quizz", data: data
      })
      if(response.success && response.data){ 
        updateQuizzData(response.data)
        console.log("Quiz created successfully", response.data)
        router.push("/quiztest")
      }

    } catch (error) {
      console.log("error", error)
    }
  }

  return (
    <>
      <div>Quiz</div>
      <CommonButton variant="outlined" onclick={handleOpen} title="Open Modal" type="button" />
      <CustomeModal open={open} handleClose={handleClose}>
        <form onSubmit={handleSubmit(handleformSubmit)}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <Input type="text" label="Topic" error={!!errors.topic} helperText={errors?.topic?.message || ""} validations={register("topic")} />
            <Input type='number' label="Time limit" error={!!errors.timeLimit} helperText={errors?.timeLimit?.message || ""} validations={register("timeLimit")} />
            <Input type='number' label="Number of numberofquestions" error={!!errors.numberOfQuestions} helperText={errors?.numberOfQuestions?.message || ""} validations={register("numberOfQuestions")} />
            <CommonSelect label="Level" options={[{ value: 'beginner', label: 'Beginner' },
            { value: 'intermediate', label: 'Intermediate' },
            { value: 'difficult', label: 'Difficult' },]}
              error={!!errors.level} helperText={errors?.level?.message || ""} validations={register("level")} />
          </Typography>
          <CommonButton variant="outlined" onclick={handleClose} title="Close" type="button" />
          <CommonButton variant="outlined" title="Submit" type="submit" />
        </form>
      </CustomeModal>
    </>
  )
}

export default CreateQuiz