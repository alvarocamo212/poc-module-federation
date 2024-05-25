import React from "react";
import { FC } from "react";

import './Table.css';

interface TableProps {
    title: string;
    rows?: { name: string, surname: string, mail: string }[]
}

export const Table: FC<TableProps> = ({ title, rows = [] }) => {
    return (
        <>
            <h1>
                {title}
            </h1>

            <table>
                <thead>
                    <th>Nombre</th>
                    <th>Apellidos</th>
                    <th>Correo</th>
                </thead>
                <tbody>
                    {rows.map(row => (
                        <>
                            <tr>
                                <td>{row.name}</td>
                                <td>{row.surname}</td>
                                <td>{row.mail}</td>
                            </tr>
                        </>
                    ))}
                </tbody>
            </table>
        </>
    )

}
