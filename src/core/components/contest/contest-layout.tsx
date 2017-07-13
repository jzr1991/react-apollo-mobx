// Example: <Titlebar>Home</Titlebar>

import * as React from 'react';
import ContestGrid  from './contest-grid';
import ContestEditor from './contest-editor';
import { graphql, gql } from 'react-apollo';
import ContestStore from './contest-store';
import { ContestType } from '../../../interfaces';

class CourseLayoutProps {
    store: ContestStore;
    contestList?: Array<ContestType>;
}


class ContestLayout extends React.Component <CourseLayoutProps, undefined> {
    render() {
        const store = this.props.store;
        if (this.props.contestList) {
            store.setContestList(this.props.contestList);
        }
        return (
            <div>
                <div className="col-xs-8">
                <ContestGrid handleSelection={(key) => store.handleSelection(key)} contestList={store.contestList}/>
                </div>
                <div className="col-xs-4">
                <ContestEditor store={store}/>
                </div>
            </div>
        );
    }

}

const options = () => ({
    props: (props) => {
        return {
            contestList: props.data.contests
        };
    }
});

const query = gql `
query contestList {
    contests {
        id
        code
        title
        description
    }
}
`;

export default graphql<any, CourseLayoutProps>(query, options())(ContestLayout);
