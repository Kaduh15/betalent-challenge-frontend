import { formatDateToDDMMYYYY, formatPhoneNumber } from '../helpers/formatters'
import { Employee } from '../types/responses'

export function createEmployeeRow(employee: Employee): HTMLDivElement {
  const { image, admission_date: admissionDate, job, name, phone } = employee

  const newTableRow = document.createElement('div')
  newTableRow.classList.add('table-row')

  newTableRow.innerHTML = `
    <img class="photo" src="${image}" alt="imagem do funcionário">
    <p class="name">${name}</p>
    <button class="details-icon icon"><i data-lucide="chevron-down"></i></button>
    <p data-head="Cargo" class="details job">${job}</p>
    <p data-head="Data de admissão" class="details date">${formatDateToDDMMYYYY(admissionDate)}</p>
    <p data-head="Telefone" class="details phone">${formatPhoneNumber(phone)}</p>
  `

  newTableRow.querySelector('.details-icon')?.addEventListener('click', () => {
    newTableRow.classList.toggle('active')
  })

  return newTableRow
}
