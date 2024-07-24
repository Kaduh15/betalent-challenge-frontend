import './style.css';
import { startIcons } from './lucideIcons';
import { createEmployeeRow } from './components/EmployeeRow';

startIcons();

const tableBody = document.querySelector('tbody');

tableBody?.appendChild(createEmployeeRow({
  admission_date: '2021-01-01',
  id: 1,
  image: 'https://picsum.photos/500/300?random=1',
  job: 'Desenvolvedor',
  name: 'João',
  phone: '5587996242198'
}))

const buttonsActions = document.querySelectorAll<HTMLButtonElement>('.toggle-details');

buttonsActions.forEach((button) => {
  button.addEventListener('click', () => {
    const rowId = button.getAttribute('data-details');
    const details = document.querySelectorAll<HTMLTableCellElement>(`.details-${rowId}`);

    details.forEach((detail) => {
      detail.classList.toggle('details-active');
    })
  })
})

startIcons()
