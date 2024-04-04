"use client";

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
  Pagination,
} from "@nextui-org/react";

export interface UserList {
  data: User[];
}

export interface User {
  ID: number;
  CreatedAt: string;
  UpdatedAt: string;
  DeletedAt: string;
  firstname: string;
  lastname: string;
  email: string;
  phonenumber: string;
  password: string;
  registrationid: string;
  dateofbirth: string;
}

export default function TableComponent({
  rows,
  columns,
}: {
  rows: User[];
  columns: { key: string; label: string }[];
}) {
  return (
    <>
      <Table aria-label="Example table with dynamic content">
        <TableHeader columns={columns}>
          {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
        </TableHeader>
        <TableBody items={rows} >
          {(item) => (
            <TableRow key={item.ID}>
              {(columnKey) => (
                <TableCell>{getKeyValue(item, columnKey)}</TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
      <div className="max-w-full pt-4 flex justify-center">
        <Pagination loop showControls color="success" total={5} initialPage={1} />
      </div>
    </>
  );
}
