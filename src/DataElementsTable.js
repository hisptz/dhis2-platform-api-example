import {useDataQuery} from "@dhis2/app-runtime";
import React, {useState} from "react";
import {CircularLoader, Table, TableBody, TableCell, TableCellHead, TableHead, TableRow, TableRowHead} from "@dhis2/ui"

const query = {
    dE: {
        resource: "dataElements",
        params: (dynamicParams) =>{

            const page = dynamicParams.page
            return {
                fields: [
                    "id",
                    "displayName",
                    "formName",
                    "valueType"
                ],
                page: page,
                pageSize: 50,
                totalPages: true
            }
        }
    }
}


export function DataElementsTable(){
    const queryData = useDataQuery(query, {
        variables: {
            page: 2
        }
    })

    const data = queryData.data?.dE;
    const loading = queryData.loading;
    const error = queryData.error;

    if (loading) {
        return (
            <div >
                <CircularLoader small/>
                <h3>Loading data elements</h3>
            </div>
        )
    }

    if (error) {
        return (
            <div>
                <h3>{error.message}</h3>
            </div>
        )
    }

    return (
        <div style={{padding: 32}} >
            <Table>
                <TableHead>
                    <TableRowHead>
                        <TableCellHead>
                            No
                        </TableCellHead>
                        <TableCellHead>
                            Display Name
                        </TableCellHead>
                        <TableCellHead>
                            Form Name
                        </TableCellHead>
                        <TableCellHead>
                            Value type
                        </TableCellHead>
                    </TableRowHead>
                </TableHead>
                <TableBody>
                    {
                        data?.dataElements?.map((dataElement, index) => (
                            <TableRow key={`${dataElement.id}-row`}>
                                <TableCell>
                                    {index + 1}
                                </TableCell>
                                <TableCell>
                                    {dataElement.displayName}
                                </TableCell>
                                <TableCell>
                                    {dataElement.formName}
                                </TableCell>
                                <TableCell>
                                    {dataElement.valueType}
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </div>
    )
}
