import { makeStyles } from '@material-ui/core';
import { Button, Checkbox, FormControlLabel, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import PropTypes from 'prop-types';

FilterByService.propTypes = {
    filters: PropTypes.object,
    onChange: PropTypes.func,
};

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(1),
        borderTop: `1px solid ${theme.palette.grey[300]}`,
        marginTop: theme.spacing(1),
    },

    menu: {
        listStyle: 'none',
        margin: 0,
        padding: 0,
    },
}));

function FilterByService({ filters = {}, onChange }) {
    const classes = useStyles();

    const handleChange = (e) => {
        if (onChange)
            onChange({
                [e.target.name]: !!e.target.checked,
            });
    };

    return (
        <Box className={classes.root}>
            <Typography mt={1} textAlign="center" variant="subtitle2">
                DỊCH VỤ
            </Typography>

            <ul className={classes.menu}>
                {[
                    { key: 'isPromotion', label: 'Có khuyến mãi' },
                    { key: 'isFreeShip', label: 'Miễn phí vận chuyển' },
                ].map((service) => (
                    <li key={service.key}>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={!!filters[service.key]}
                                    onChange={handleChange}
                                    name={service.key}
                                    color="primary"
                                />
                            }
                            label={service.label}
                        />
                    </li>
                ))}
            </ul>
        </Box>
    );
}

export default FilterByService;