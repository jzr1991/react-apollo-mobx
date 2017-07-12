//  This file was automatically generated and should not be edited.
/* tslint:disable */

export interface UserQueryVariables {
  id: string;
}

export interface UserQuery {
  // User Type
  me: {
    id: string | null,
    firstName: string | null,
    lastName: string | null,
  } | null;
}

export interface ContestType {
  id: string
  code: string
  title: string
  description: string
}
/* tslint:enable */
