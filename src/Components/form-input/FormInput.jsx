import React from 'react';
import { FormInputlabel, Group, Input, } from './form-input.styles.jsx';

const FormInput = ({ label, ...otherProps }) => {
    return (
        <Group>
            <Input {...otherProps} />

            {label && <FormInputlabel shrink={otherProps.value.length}>{label}</FormInputlabel>
            }

        </Group>
    )

};

export default FormInput;