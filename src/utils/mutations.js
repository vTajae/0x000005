import { gql } from '@apollo/client';


export const ORG_LOGIN = gql`
mutation Mutation($input: OrganizationLoginInput!) {
    loginOrganization(input: $input) {
      token
    }
  }
`;

export const EMP_LOGIN = gql`
mutation Mutation($input: EmployeeLoginInput!) {
    loginEmployee(input: $input) {
      token
    }
  }
`;



export const ORG_APPLY = gql`
mutation LoginOrganization($input: OrganizationApplicationInput!) {
    createOrganizationApplication(input: $input) {
      Companyemail
      CompanyPhone
      CompanyName
      CompanyDescription
      CompanyAddress
    }
  }
`;

// export const ADD_EMPLOYEE = gql`


// `;


// export const ADD_STUDENT = gql`


// `;



