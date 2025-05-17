
import CommonButton from '@/lib/components/Button';
import CommonSelect from '@/lib/components/CommonSelect';
import CustomeModal from '@/lib/components/CustomModal';
import Input from '@/lib/components/Input';
import { yupResolver } from '@hookform/resolvers/yup';
import { Typography } from '@mui/material';
import React from 'react'
import { useForm } from 'react-hook-form';
import * as yup from 'yup'


interface QuizForm {
  topic: string
  timeLimit: number
  questions: number
  level: string
}

const Quiz = () => {
  const schema = yup.object().shape({
    topic: yup.string().required('Topic is required'),
    timeLimit: yup.number().typeError("Enter a valid time limit").required('Time limit is required'),
    questions: yup.number().typeError("Enter a valid number of questions").required('Time limit is required'),
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
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleformSubmit = (data: QuizForm) => {
    console.log('Form Data:', data)
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
            <Input type='number' label="Number of questions" error={!!errors.questions} helperText={errors?.questions?.message || ""} validations={register("questions")} />
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

export default Quiz