const useInitialValues = () => {
    return {
        personalDetails: {
            firstName: '',
            lastName: '',
            jobTitle: '',
            email: '',
            phone: '',
            country: '',
            city: '',
            summary: ''
        },
        experiences: [
            {
                id: '1',
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