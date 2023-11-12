export type PersonalFields = {
    personalDetails: {
        firstName: string;
        lastName: string;
        jobTitle: string;
        email: string;
        phone: string;
        country: string;
        city: string;
    }
}

export type EmploymentFields = {
    employments: Array<
        {
            title: string;
            employer: string;
            currentlyWorking: boolean;
            startDate: string;
            endDate: string;
            description: string;
        }
    >
};

export type ExperienceFields = {
    experiences: Array<
        {
            id: string;
            school: string;
            degree: string;
            currentlyStudying: boolean;
            startDate: string;
            endDate: string;
            description: string;
        }
    >
}

export type Skills = Array<string>;

export type ReferencesFields = {
    references: Array<
        {
            referee: string;
            company: string;
            phone: string;
            email: string;
            availableOnRequest: boolean;
        }
    >
};

export type LanguageFields = {
    languages: Array<
        {
            language: string;
            level:
                'Native speaker' |
                'Highly proficient' |
                'Very good command' |
                'Good working knowledge' |
                'C2' |
                'C1' |
                'B2' |
                'B1' |
                'A2' |
                'A1'
        }
    >
}

export type CourseFields = {
    courses: Array<
        {
            course: string;
            institution: string;
            currentlyStudying: boolean;
            startDate: string;
            endDate: string;
        }
    >
}