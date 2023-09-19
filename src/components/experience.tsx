import { AtSign, MapPin, User, Contact, Building2, CalendarCheck2, CalendarX2, CalendarCheck, TextQuote } from 'lucide-react';
import { TextField, Heading, Section, TextArea, Switch } from '@radix-ui/themes';
import { useForm } from "react-hook-form";
import { ExperienceFields } from '@/fields';

const Experience: React.FC<{handleUpdates: Function}> = ({handleUpdates}) => {

    const {
        register,
        watch,
        formState: { errors },
      } = useForm<ExperienceFields>()

    handleUpdates(watch());

    return (
        <Section py={'4'}>
            <Heading as="h2" mb={'4'} align="left">Experience</Heading>

            <TextField.Root mb="4">
                <TextField.Slot>
                    <Contact height="16" width="16" />
                </TextField.Slot>
                <TextField.Input placeholder="Title" size="3" {...register("title")} />
            </TextField.Root>

            <TextField.Root mb="4">
                <TextField.Slot>
                    <Building2 height="16" width="16" />
                </TextField.Slot>
                <TextField.Input placeholder="Organisation" size="3" {...register("organisation")} />
            </TextField.Root>

            <TextField.Root mb="4">
                <TextField.Slot>
                    <CalendarCheck2 height="16" width="16" />
                </TextField.Slot>
                <TextField.Input placeholder="Start Date" size="3" {...register("startDate")} />
            </TextField.Root>

            <TextField.Root mb="4">
                <TextField.Slot>
                    <CalendarX2 height="16" width="16" />
                </TextField.Slot>
                <TextField.Input placeholder="End Date" size="3" {...register("endDate")} />
            </TextField.Root>

            <TextField.Root mb="4">
                <TextField.Slot>
                    <CalendarCheck height="16" width="16" />
                </TextField.Slot>
                <Switch radius="full" defaultChecked {...register("currentlyWorkingHere")}/>
                {/* <TextField.Input placeholder="I currently work here" size="3" {...register("currentlyWorkingHere")} /> */}
            </TextField.Root>

            <TextField.Root mb="4">
                <TextField.Slot>
                    <TextQuote height="16" width="16" />
                </TextField.Slot>
                <TextField.Input placeholder="Responsibilities" size="3" {...register("responsibilites")} />
            </TextField.Root>
        </Section>
    )
}

export default Experience;
