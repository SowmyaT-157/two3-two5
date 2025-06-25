import { Employee } from "../intefaces/employe";
export function findEmployeeById(employees: Employee[], id: number): Employee | null {
  const found = employees.find(emp => emp.id === id);
  return found || null;
}