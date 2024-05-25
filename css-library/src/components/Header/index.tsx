import * as React from 'react';

export const Header: React.FC<{ title: string }> = ({ title }) => {
    return (
        <h1>{title}</h1>
    )
}