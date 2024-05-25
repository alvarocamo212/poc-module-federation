declare module "components" {
    import * as React from 'react';

    export interface TableProps {
        title: string;
        rows?: { name: string, surname: string, mail: string }[]
    }

    export interface HeaderProps {
        title: string;
    }

    const Table: React.ComponentClass<TableProps>;
    const Header: React.ComponentClass<HeaderProps>;

    export { Table, Header }
}