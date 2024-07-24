import './style.css'
import { startIcons } from './libs/lucideIcons'
import { createEmployeeRow } from './components/EmployeeRow'
import { getEmployees } from './helpers/fetch'
import { Employee } from './types/responses'

startIcons()

const tableBody = document.querySelector('.table-body')
const inputSearch = document.querySelector('#search-input')

let employees: Employee[] = []

getEmployees().then((employeesResponse) => {
  employees = employeesResponse
  employees.forEach((employee) => {
    const employeeRow = createEmployeeRow(employee)
    tableBody?.appendChild(employeeRow)
  })
  startIcons()
})

inputSearch?.addEventListener('input', (e) => {
  const search = (e.target as HTMLInputElement).value.toLowerCase()
  if (tableBody) {
    tableBody.innerHTML = ''
    employees.forEach((employee) => {
      if (employee.name.toLowerCase().includes(search)) {
        tableBody.appendChild(createEmployeeRow(employee))
      }
    })
  }

  startIcons()
})
