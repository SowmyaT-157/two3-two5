import {Employee} from "../src/intefaces/employe";
import {updateEmployeeRole} from "../src/employRole/modifyRole"

test("updates employee role inplace", () => {
  const employees: Employee[] = [
    { id: 1, name: "vinni", role: "Engineer", income: 85000, location: "Chennai" },
  ];

  const result = updateEmployeeRole(employees, 1, "Team Lead");
  expect(result).toBe(true);
  expect(employees[0].role).toBe("Team Lead");
});

test("returns false if employee ID not found", () => {
  const employees: Employee[] = [
    { id: 1, name: "vinni", role: "Engineer", income: 85000, location: "Chennai" },
  ];

  const result = updateEmployeeRole(employees, 99, "CEO");
  expect(result).toBe(false);
});
