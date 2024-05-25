import * as React from "react";
import { Header } from "../Header";
import { TableContainer, Paper, TableHead, TableRow, TableCell, TableBody, Table as MuiTable } from "@mui/material";

interface TableProps {
    title: string;
    rows?: { name: string, surname: string, mail: string }[]
}

export const Table: React.FC<TableProps> = ({ title, rows = [] }) => {
    return (
        <>
            <Header title={title} />
            <TableContainer component={Paper}>
                <MuiTable sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Surname</TableCell>
                            <TableCell align="right">Email</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.name}</TableCell>
                                <TableCell align="right">{row.surname}</TableCell>
                                <TableCell align="right">{row.mail}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </MuiTable>
            </TableContainer>
        </>
    )
}