
import * as React from 'react';
import { graphql, gql } from 'react-apollo';


import {
  UserQuery
} from '../../../interfaces';



const UserCard = (user: UserQuery) => {    
    return (
        <div>
            User Info {user.me.firstName}
        </div>
    );
}

const options = () => ({
    options: {
        variables: {id: "4242"}
    },
    props: (props) => {
        let resp = {};
        if(props.data && props.data.me){
            resp['me'] = props.data.me;
        } else{
            resp['me'] = {firstName: ''};
        }
        return resp;
        
    }
});


const query = gql ` 
query user($id: String!) {
  me (key: $id) {
    id,
    firstName,
    lastName
  }
}
`;

export default graphql(query, options())(UserCard);
