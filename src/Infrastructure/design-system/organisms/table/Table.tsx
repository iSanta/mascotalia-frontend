import { Table, TableProps } from 'antd';

export type AbstractTableProps = TableProps & {};

export function AbstractTable(props: AbstractTableProps) {
    return <Table {...props} />;
}
