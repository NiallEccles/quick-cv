import { AtSign, MapPin, User } from 'lucide-react';

import { TextField, Heading, Section, TextArea } from '@radix-ui/themes';

function Personal() {
    return (
        <Section>
            <Heading as="h2" mb="4" align="left">Personal Details</Heading>

            <TextField.Root mb="4">
                <TextField.Slot>
                    <User height="16" width="16" />
                </TextField.Slot>
                <TextField.Input placeholder="Full name" size="3" />
            </TextField.Root>

            <TextField.Root mb="4">
                <TextField.Slot>
                    <AtSign height="16" width="16" />
                </TextField.Slot>
                <TextField.Input placeholder="Contact" size="3" />
            </TextField.Root>

            <TextField.Root mb="4">
                <TextField.Slot>
                    <MapPin height="16" width="16" />
                </TextField.Slot>
                <TextField.Input placeholder="Location" size="3" />
            </TextField.Root>

            <TextArea size="3" placeholder="Statement..." />
        </Section>
    )
}

export default Personal;
