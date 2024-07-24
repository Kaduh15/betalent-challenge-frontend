import './style.css'
import { startIcons } from './lucideIcons'
import { createEmployeeRow } from './components/EmployeeRow'
import { getEmployees } from './helpers/fetch'

startIcons()

const tableBody = document.querySelector('.table-body')

getEmployees().then((employees) => {
  employees.forEach((employee) => {
    const employeeRow = createEmployeeRow(employee)
    tableBody?.appendChild(employeeRow)
  })
  startIcons()
})
