// Example: <Titlebar>Home</Titlebar>

import * as React from 'react';
import { ContestType } from '../../../interfaces';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import { observer } from 'mobx-react';
import ContestStore from './contest-store';
import { graphql, gql } from 'react-apollo';

interface ContestEditorProps {
    store: ContestStore;
    contest: ContestType;
    mutate: any
}

@observer
export class ContestEditor extends React.Component<ContestEditorProps, any> {
    
    render() {
        const store = this.props.store;
        return (
            <div>
                <div className="row">   
                    <label>{" "}</label>
                </div>
                <div className="row">
                    <label>Edit Contest</label>
                </div>
                <div className="row">
                    <TextField style={{width:200}} value={store.contest.code} onChange={(e) => {store.updateCode(e.target.value)}}/>
                </div>
                <div className="row">
                    <TextField style={{width:200}} value={store.contest.title} onChange={(e) => {store.updateTitle(e.target.value)}}/>
                </div>
                <div className="row">
                    <TextField style={{width:200}} value={store.contest.description} onChange={(e) => {store.updateDescription(e.target.value)}}/>
                </div>
                <div className="row">
                    <label>{" "}</label>
                </div>
                <div className="row">
                    <Button raised={true} color="primary" onClick={this.handleSave}>Save</Button>
                </div>
            </div>
        );
    }

    handleSave = () => {
        this.props.mutate({variables: this.input(this.props.store.contest)})
    }

    input = (contest: ContestType) => {
        return {
            "input": {
                "id": contest.id,
                "code": contest.code,
                "title": contest.title,
                "description": contest.description
            }
        }
    }
} 


const mutation = gql `
mutation AddNewContest($input: ContestInputType!) {
	addContest(input: $input) {
        id
        code
        title
        description
        state
  }
}
`;

const options = () => ({
    options: {
        refetchQueries: [
            'contestList'
        ]
    }
})

export default graphql<any, ContestEditorProps>(mutation, options())(ContestEditor);
