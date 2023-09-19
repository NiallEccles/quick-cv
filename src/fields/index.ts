export type PersonalFields = {
    name: string,
    location: string,
    contact: string,
    statement: string
};

export type ExperienceFields = {
    title: string,
    organisation: string,
    startDate: Date,
    endDate: Date,
    currentlyWorkingHere: boolean,
    responsibilites: string[]
};

export type FormFields = PersonalFields | ExperienceFields;