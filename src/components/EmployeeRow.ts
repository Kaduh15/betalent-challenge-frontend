import { formatDateToDDMMYYYY, formatPhoneNumber } from '../helpers/formatters'
import { Employee } from '../types/responses'
import './employeeRow.css'

export function createEmployeeRow(employee: Employee): HTMLDivElement {
  const {
    id,
    image,
    admission_date: admissionDate,
    job,
    name,
    phone,
  } = employee

  const divRow = document.createElement('tr')
  divRow.classList.add('table-item-row', 'row-grid')
  divRow.id = `${id}`

  divRow.innerHTML = `
    <td class="photo-grid table-row-photo"><img src="${image}"
        alt="Foto de Giovana L. Arruda"></td>
    <td class="name-grid">${name}</td>
    <td data-head="Cargo" class="job-grid details-content details-${id}">${job}</td>
    <td data-head="Data de Admissão" class="date-grid details-content details-${id}">${formatDateToDDMMYYYY(admissionDate)}</td>
    <td data-head="Telefone" class="phone-grid details-content details-${id}">${formatPhoneNumber(phone)}</td>
    <td class="toggle-icon-grid details-content-icon">
      <button data-details="${id}" class="toggle-details">
        <i data-lucide="chevron-down"></i>
      </button>
    </td>
  `

  return divRow
}
