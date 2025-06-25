import { Employee } from "../intefaces/employe";
export function updateEmployeeRole(
  employees: Employee[],
  id: number,
  newRole: string
): boolean {
  const employee = employees.find(emp => emp.id === id);
  if (employee) {
    employee.role = newRole;
    return true;
  }
  return false; 
}