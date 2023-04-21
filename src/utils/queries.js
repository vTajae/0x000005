export const QUERY_EMPLOYEES = gql`
query GetEmployees($org_id: ID!) {
    employees(org_id: $org_id) {
      EmployeePhoneNumber
      EmployeeLastName
      EmployeeFirstName
      EmployeeEmail
      EmployeeAddress
    }
  }
`;

export const QUERY_STUDENTS = gql`
query Students($empId: ID!) {
    students(emp_id: $empId) {
      studentPhone
      studentLastName
      studentFirstName
      studentEmail
      stu_id
    }
  }
`;

export const QUERY_SUBJECTS = gql`
query Students {
    subjects {
      name
    }
  }
`;

export const QUERY_COURSES = gql`
query Courses {
    courses {
      title
    }
  }
`;
