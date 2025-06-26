
import { filterEmployeByLocation,writeEmployeToFile} from "../src/filterByLocation/filter";
import { Employee } from "../src/intefaces/employe"

const mockEmployees: Employee[] = [
  { id: 1, name: "vinni", role: "Engineer", income: 85000, location: "Chennai" },
  { id: 2, name: "Ramesh", role: "Manager", income: 95000, location: "Hyderabad" },
  { id: 3, name: "Sandy", role: "Designer", income: 72000, location: "Chennai" },
];

describe("filterEmployeByLocation", () => {
  test("returns employees matching location", () => {
    const filtered = filterEmployeByLocation(mockEmployees, "Chennai");
    expect(filtered.length).toBe(2);
    expect(filtered[0].name).toBe("vinni");
    expect(filtered[1].name).toBe("Sandy");
  });

  test("returns empty array when no employee matches location", () => {
    const filtered = filterEmployeByLocation(mockEmployees, "Delhi");
    expect(filtered).toEqual([]);
  });

  test("It handle case insensitive matching", () => {
    const filtered = filterEmployeByLocation(mockEmployees, "cHeNnAi");
    expect(filtered.length).toBe(2);
  });

  test("returns empty array for empty location", () => {
    const filtered = filterEmployeByLocation(mockEmployees, "");
    expect(filtered).toEqual([]);
  });

  test("skips employees with undefined location", () => {
    const withMissing = [
      ...mockEmployees,
      { id: 4, name: "Ghost", role: "None", income: 0, location: undefined as any }
    ];
    const filtered = filterEmployeByLocation(withMissing, "Chennai");
    expect(filtered.length).toBe(2);
  });

  test("explicitly covers false condition branch", () => {
    const filtered = filterEmployeByLocation(mockEmployees, "Mumbai");
    const isAnyoneFromMumbai = mockEmployees.some(emp => emp.location.toLowerCase() === "mumbai");
    expect(filtered).toEqual([]);
    expect(isAnyoneFromMumbai).toBe(false); 
  });
});

describe("writeEmployeToFile", () => {
  test("writes multiple employee records to file using mock", () => {
    const filtered = filterEmployeByLocation(mockEmployees, "Chennai");
    const mockWriteFn = jest.fn();

    writeEmployeToFile(filtered, "output.txt", mockWriteFn);

    expect(mockWriteFn).toHaveBeenCalledTimes(1);
    const writtenData = mockWriteFn.mock.calls[0][1];
    expect(writtenData).toContain("vinni");
    expect(writtenData).toContain("Sandy");
    expect(writtenData.split("\n").length).toBe(2);
  });

  test("writes empty string when no employees are provided", () => {
    const mockWriteFn = jest.fn();

    writeEmployeToFile([], "empty", mockWriteFn);

    expect(mockWriteFn).toHaveBeenCalledWith("empty", "");
  });
});
