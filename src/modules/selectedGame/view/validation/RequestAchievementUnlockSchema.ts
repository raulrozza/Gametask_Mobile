import * as Yup from 'yup';

const RequestAchievementUnlockSchema = Yup.object().shape({
  information: Yup.string().required('Conte como desbloqueou a conquista.'),
});

export default RequestAchievementUnlockSchema;
