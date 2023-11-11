import styles from './experience-form.module.css';
import { useForm, useFieldArray, Controller, useWatch, SubmitHandler } from "react-hook-form";
import { Button, Checkbox, Label, TextInput, Datepicker } from 'flowbite-react';

/* eslint-disable-next-line */
export interface ExperienceFormProps {}

type Inputs = {
    school: string
    degree: string
    dates?: string
    description?: string
}

export function ExperienceForm(props: ExperienceFormProps) {
    const onSubmit = (data: any) => console.log(data);
    const { register, control, handleSubmit, reset, watch } = useForm({
        defaultValues: {
            experience: [{ school: "Bill", degree: "Luo", dates: "", description: "" }]
        }
    });
    const {
        fields,
        append,
        remove,
        move,
    } = useFieldArray({
        control,
        name: "experience"
    })
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <ol>
                {fields.map((item, index) => {
                    return (
                        <li key={item.id}>
                            <div className="flex">
                                <div>
                                    {/*<TextInput*/}
                                    {/*    id={`test.${index}.experienceName${index}`}*/}
                                    {/*    {...register(`test.${index}.experienceName`, { required: true})}*/}
                                    {/*/>*/}
                                    <div className="mb-2">
                                        <Label htmlFor={`test.${index}.experienceName${index}`} value="School/College/University" />
                                    </div>
                                    <Controller
                                        render={({ field }) => <TextInput {...field} />}
                                        name={`experience.${index}.school`}
                                        control={control}
                                    />
                                    <div className="mb-2">
                                        <Label htmlFor={`test.${index}.degree${index}`} value="Degree" />
                                    </div>
                                    <Controller
                                        render={({ field }) => <TextInput {...field} />}
                                        name={`experience.${index}.degree`}
                                        control={control}
                                    />
                                    <div className="mb-2">
                                        <Label htmlFor={`experience.${index}.dates${index}`} value="Dates" />
                                    </div>
                                    <Controller
                                        render={({ field }) => <Datepicker />}
                                        name={`experience.${index}.dates`}
                                        control={control}
                                    />
                                    <div className="mb-2">
                                        <Label htmlFor={`experience.${index}.description${index}`} value="Description" />
                                    </div>
                                    <Controller
                                        render={({ field }) => <TextInput {...field} />}
                                        name={`experience.${index}.description`}
                                        control={control}
                                    />
                                </div>
                                <Button type="button" onClick={() => remove(index)}>
                                    Delete
                                </Button>
                            </div>
                        </li>
                    );
                })}
            </ol>
            <section>
                <button
                    type="button"
                    onClick={() => {
                        append({ school: "appendBill", degree: "appendLuo", dates: "", description: "" });
                    }}
                >
                    append
                </button>

                <button type="button" onClick={() => move(0, 1)}>
                    move
                </button>

                <button
                    type="button"
                    onClick={() =>
                        reset({
                            experience: [{ school: "Bill", degree: "Luo" }]
                        })
                    }
                >
                    reset
                </button>
            </section>

            <Button type="submit">Submit</Button>
        </form>
    );
}

export default ExperienceForm;
