
import { totalIncome} from "../src/totalIncome/income";
import { Employee } from "../src/intefaces/employe";

test("calculates total income correctly", () => {
  const employees: Employee[] = [
    { id: 1, name: "vinni", role: "Software Engineer", income: 85000, location: "Chennai" },
    { id: 2, name: "Ramesh", role: "Product Manager", income: 95000, location: "Hyderabad" },
    { id: 3, name: "sandy", role: "Designer", income: 72000, location: "Cudapa" },
  ];

  const total = totalIncome(employees);
  expect(total).toBe(252000); 
});

test("returns 0 for empty employee list", () => {
  const total = totalIncome([]);
  expect(total).toBe(0);
});