export default function createReportObject(employeesList) {
  return {
    allEmployees: { ...employeesList },
    getNumberOfDepartments: function (employeesList) {
      let count = 0;
      for (let key in employeesList) {
        if (employeesList.hasOwnProperty(key)) {
          count++;
        }
      }
      return count;
    }
  };
}
