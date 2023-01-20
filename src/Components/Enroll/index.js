import React, { useState } from 'react'
import { TextField, Grid } from '@mui/material';
import { FormWrapper, FormButton } from './styles';

import React, { useState } from 'react';
import { TextField, Grid } from '@material-ui/core';

const formData = {
    name: {
        label: 'Name',
        value: '',
    },
    email: {
        label: 'Email',
        value: '',
    },
    phone: {
        label: 'Phone Number',
        value: '',
    },
    other: {
        label: 'Other',
        value: '',
    },
};

const Enroll = () => {
    const [form, setForm] = useState(formData);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setForm(prevForm => {
            return {
                ...prevForm,
                [name]: {
                    ...prevForm[name],
                    value
                }
            }
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(form);
    };

    return (
        <form onSubmit={handleSubmit}>
            {Object.keys(form).map((field, index) => (
                <Grid container spacing={3} key={index}>
                    <Grid item xs={6} sm={6}>
                        <TextField
                            fullWidth
                            label={form[field].label}
                            variant="outlined"
                            name={field}
                            value={form[field].value}
                            onChange={handleChange}
                        />
                    </Grid>
                </Grid>
            ))}
            <button type="submit">Submit</button>
        </form>
    );
}

export default Enroll;
