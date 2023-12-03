import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    personalDetails: Yup.object().shape({
        firstName: Yup.string(),
        lastName: Yup.string(),
        jobTitle: Yup.string(),
        email: Yup.string(),
        phone: Yup.string(),
        country: Yup.string(),
        city: Yup.string(),
        summary: Yup.string(),
    }),
    experiences: Yup.array().of(
        Yup.object().shape({
            school: Yup.string(),
            degree: Yup.string(),
            currentlyStudying: Yup.boolean(),
            startDate: Yup.string(),
            endDate: Yup.string(),
            description: Yup.string(),
        })
    ),
    employments: Yup.array().of(
        Yup.object().shape({
            id: Yup.string(),
            title: Yup.string(),
            employer: Yup.boolean(),
            currentlyWorking: Yup.string(),
            startDate: Yup.string(),
            endDate: Yup.string(),
        })
    )
});

export default validationSchema;