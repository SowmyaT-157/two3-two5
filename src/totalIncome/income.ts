import { Employee } from "../intefaces/employe";
export function totalIncome(employees: Employee[]): number {
  return employees.reduce((sum, emp) => sum + emp.income, 0);
}


