export default function createReportObject(employeesList) {
  return {
    allEmployees: { ...employeesList }, // Spread operator to copy employeesList into allEmployees
    getNumberOfDepartments: function () { // Method to calculate number of departments
      return Object.keys(employeesList).length;
    }
  };
}
