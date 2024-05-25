import Typography from '@mui/material/Typography';
import * as React from 'react';

export const Header: React.FC<{ title: string }> = ({ title }) => {
    return (
        <Typography variant='h1'>
            {title}
        </Typography>
    );
}
