import axios from "axios";
import { fetchEmployeData} from "../src/employData/data";
import { Employee}  from "../src/intefaces/employe";

jest.mock("axios");
const mockedAxios = axios as any;

test("fetchEmployeData returns employee data", async () => {
  const mockEmployees = [
    { id: 1, name: "vinni", role: "Software Engineer", income: 85000, location: "Chennai" },
    { id: 2, name: "Ramesh", role: "Product Manager", income: 95000, location: "Chennai" },
  ];
  mockedAxios.get.mockResolvedValue({ data: mockEmployees });
  const result = await fetchEmployeData();
  expect(result).toEqual(mockEmployees);
  expect(result.length).toBe(2);
  expect(result[0].name).toBe("vinni");

});