import { nanoid } from 'nanoid';

const useInitialValues = () => {
    return {
        personalDetails: {
            name: '',
            jobTitle: '',
            email: '',
            phone: '',
            country: '',
            city: '',
            summary: ''
        },
        experiences: [
            {
                id: nanoid(),
                school: "1",
                degree: "1",
                currentlyStudying: false,
                startDate: "1",
                endDate: "1",
                description: "",
            },
        ]
    }
};

export default useInitialValues;