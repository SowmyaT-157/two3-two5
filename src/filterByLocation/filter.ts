
import { Employee } from "../intefaces/employe";
import * as fs from "fs";

export function filterEmployeByLocation(
  employees: Employee[],
  location: string
): Employee[] {
  return employees.filter(
    (emp) => emp.location?.toLowerCase() === location.toLowerCase()
  );
}

export function writeEmployeToFile(
  employees: Employee[],
  filePath: string,
  writeFn: (path: string, data: string) => void = fs.writeFileSync
): void {
  const data = employees
    .map((emp) => `ID: ${emp.id}, Name: ${emp.name}, Role: ${emp.role}, Income: ${emp.income}, Location: ${emp.location}`)
    .join("\n");

  writeFn(filePath, data);
}
