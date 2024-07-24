import { ENV } from '../env'
import { Employee } from '../types/responses'

export async function getEmployees(): Promise<Employee[]> {
  const response = await fetch(`${ENV.VITE_APP_API_URL}/employees`)
  const employees = await response.json()
  return employees as Employee[]
}
