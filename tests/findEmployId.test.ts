
import {findEmployeeById} from "../src/findEmployId/employId"
import { Employee } from "../src/intefaces/employe";

const employees: Employee[] = [
  { id: 1, name: "vinni", role: "Engineer", income: 85000, location: "Chennai" },
  { id: 2, name: "Ramesh", role: "Manager", income: 95000, location: "Hyderabad" },
];

test("finds an employee with valid ID", () => {
  const result = findEmployeeById(employees, 2);
  expect(result).toEqual({
    id: 2,
    name: "Ramesh",
    role: "Manager",
    income: 95000,
    location: "Hyderabad"
  });
});

test("returns null if employee ID not found", () => {
  const result = findEmployeeById(employees, 99);
  expect(result).toBeNull();
});
