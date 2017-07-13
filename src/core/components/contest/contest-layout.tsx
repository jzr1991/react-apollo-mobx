// Example: <Titlebar>Home</Titlebar>

import * as React from 'react';
import ContestGrid  from './contest-grid';
import ContestEditor from './contest-editor';
import { graphql, gql } from 'react-apollo';
import ContestStore from './contest-store';

class CourseLayoutProps {
    store: ContestStore;
}

const ContestLayout = (props: CourseLayoutProps) => {
    const store = props.store;
    return (
        <div>
            <div className="col-xs-8">
              <ContestGrid handleSelection={(key) => store.handleSelection(key)} contestList={store.contestList}/>
            </div>
            <div className="col-xs-4">
              <ContestEditor store={props.store}/>
            </div>
        </div>
    );
};

const options = () => ({
    props: (props) => {
        let resp = new CourseLayoutProps();
        let contestStore = new ContestStore();
        if (props.data && props.data.contests) {
            contestStore.setContestList(props.data.contests);
        }
        resp.store = contestStore;
        return resp;
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

export default graphql(query, options())(ContestLayout);
