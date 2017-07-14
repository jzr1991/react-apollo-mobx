
import * as React from 'react';
import { ContestType } from '../../../interfaces';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import { observer } from 'mobx-react';
import ContestStore from './contest-store';

interface ContestEditorProps {
    store: ContestStore;
    handleSave: (contest: ContestType) => void;
}

@observer
export default class ContestEditor extends React.Component<ContestEditorProps, undefined> {
    render() {
        const store = this.props.store;
        const handleSave = this.props.handleSave;
        return (
            <div>
                <div className="row">
                    <label>{''}</label>
                </div>
                <div className="row">
                    <label>Edit Contest</label>
                </div>
                <div className="row">
                    <TextField style={{width: '200px'}} value={store.contest.code} onChange={(e) => {store.updateCode(e.target.value); }}/>
                </div>
                <div className="row">
                    <TextField style={{width: '200px'}} value={store.contest.title} onChange={(e) => {store.updateTitle(e.target.value); }}/>
                </div>
                <div className="row">
                    <TextField style={{width: '200px'}} value={store.contest.description} onChange={(e) => {store.updateDescription(e.target.value); }}/>
                </div>
                <div className="row">
                    <label>{' '}</label>
                </div>
                <div className="row">
                    <Button raised={true} color="primary" onClick={() => handleSave(store.contest)}>Save</Button>
                </div>
            </div>
        );
    }
}
