// Example: <Titlebar>Home</Titlebar>

import * as React from 'react';
import { ContestType } from '../../../interfaces';
import Table, { TableBody, TableHead, TableRow, TableCell } from 'material-ui/Table';

interface ContestGridProps {
    contestList: Array<ContestType>;
    handleSelection: (key: string) => void;
}

interface ContestRow {
    contest: ContestType;
    handleSelection: (key: string) => void;
}

export default class ContestGrid extends React.Component <ContestGridProps, any> {
    render () {
        let contestList = this.props.contestList;
        let handleSelection = this.props.handleSelection;
        return (
            <div className="col-xs-4">
                <Table>
                    <ContestHeader/>
                    <TableBody>
                        {
                            contestList.map((contest, idx) => {
                                return <ContestRow key={idx} handleSelection={handleSelection} contest={contest}/>;
                            })
                        }
                    </TableBody>
                </Table>
            </div>
        );
    }
}

class ContestHeader extends React.Component <any, any> {
    render() {
        return (
            <TableHead>
                <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Code</TableCell>
                    <TableCell>Title</TableCell>
                </TableRow>
            </TableHead>
        );
    }
}

class ContestRow extends React.Component <any, any> {
    render() {
        const {contest: {id, code, title}, handleSelection} = this.props;
        return (
            <TableRow hover={true} onClick={(e) => handleSelection(id)}>
                <TableCell>{id}</TableCell>
                <TableCell>{code}</TableCell>
                <TableCell>{title}</TableCell>
            </TableRow>
        );
    }
}
