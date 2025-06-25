console.log("twoThree - twoFive")
import { fetchEmployeData } from "./employData/data";

fetchEmployeData()
  .then((data) => {
    console.log("Employees:", data);
  })
  .catch((err) => {
    console.error("Error:", err.message);
  });