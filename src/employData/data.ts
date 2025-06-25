import { config } from "dotenv";
import axios from "axios";
import { Employee } from "../intefaces/employe";

config();

const API_URL = process.env.EMPLOYEE_API_URL as string;

export async function fetchEmployeData(): Promise<Employee[]> {
  const res = await axios.get<Employee[]>(API_URL);
  return res.data;
}