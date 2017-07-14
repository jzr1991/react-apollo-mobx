
import * as React from 'react';
import ContestGrid  from './contest-grid';
import ContestEditor from './contest-editor';
import { gql } from 'react-apollo';
import ContestStore from './contest-store';
import { ContestType } from '../../../interfaces';
import withGraphQL from 'react-apollo-decorators/lib/withGraphQL';
import withMutation from 'react-apollo-decorators/lib/withMutation';

const contestListQuery = gql `
query contestList {
    contests {
        id
        code
        title
        description
    }
}`;

const saveContest = gql `
mutation saveContest($input: ContestInputType!) {
	addContest(input: $input) {
        id
        code
        title
        description
  }
}`;

@withGraphQL(contestListQuery)
@withMutation(saveContest)
export default class ContestLayout extends React.Component <CourseLayoutProps, undefined> {
    render() {
        const store = this.props.store;
        if (this.props.contests) {
            store.setContestList(this.props.contests);
        }
        return (
            <div>
                <div className="col-xs-8">
                    <ContestGrid handleSelection={(key) => store.handleSelection(key)} contestList={store.contestList}/>
                </div>
                <div className="col-xs-4">
                    <ContestEditor handleSave={this.handleSave} store={store}/>
                </div>
            </div>
        );
    }

    handleSave = (contest: ContestType) => {
        this.props.saveContest(this.input(contest), this.options());
    }

    input = (contest: ContestType) => {
        return {
            'input': {
                'id': contest.id,
                'code': contest.code,
                'title': contest.title,
                'description': contest.description
            }
        };
    }

    options = () => ({
        options: {
            refetchQueries: [
                'contestList'
            ]
        }
    })
}

class CourseLayoutProps {
    store: ContestStore;
    contests?: Array<ContestType>;
    saveContest?: (input: object, option: object) => void;
}
