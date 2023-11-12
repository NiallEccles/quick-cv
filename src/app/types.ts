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