// Example: <Titlebar>Home</Titlebar>

import * as React from 'react';
import ContestGrid  from './contest-grid';
import ContestEditor from './contest-editor';
import { ContestType } from '../../../interfaces/interfaces';
import { graphql, gql } from 'react-apollo';
import ContestStore from './contest-store';

interface CourseLayoutProps {
    contestList: Array<ContestType>
    contest: ContestType
    store: ContestStore
}

const ContestLayout = (props: CourseLayoutProps) => {
    return (
        <div>
            <div className="col-xs-8">
              <ContestGrid handleSelection={(key) => props.store.handleSelection(key)} contestList={props.contestList}/>
            </div>
            <div className="col-xs-4">
              <ContestEditor store={props.store} contest={props.contest} mutate={() => {}}/>
            </div>
        </div>
    );
}


const options = () => ({
    options: {
        variables: {
            id: "4242"
        }
    },
    props: (props) => {
        let resp = {};
        let contestStore = new ContestStore();
        if(props.data && props.data.me && props.data.me.contests){
            resp['contestList'] = props.data.me.contests;
            resp['contest'] = props.data.me.contests[0];
        } else{
            resp['contestList'] = [];
            resp['contest'] = {};
        }
        contestStore.setContest(resp['contest']);
        contestStore.setContestList(resp['contestList']);
        resp['store'] = contestStore;
        return resp;
    }
});


const query = gql ` 
query contestList($id: String!) {
  me (key: $id) {
    contests {
        id
        code
        title
        description
    }
  }
}
`;

export default graphql(query, options())(ContestLayout);