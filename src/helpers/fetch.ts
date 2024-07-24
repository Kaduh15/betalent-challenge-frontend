import { Employee } from '../types/responses'

export async function getEmployees(): Promise<Employee[]> {
  const response = await fetch('http://localhost:3000/employees')
  const employees = await response.json()
  return employees as Employee[]
}
