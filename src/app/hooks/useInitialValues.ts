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
                school: "School Name",
                degree: "",
                currentlyStudying: false,
                startDate: "1",
                endDate: "1",
                description: "",
            },
        ]
    }
};

export default useInitialValues;