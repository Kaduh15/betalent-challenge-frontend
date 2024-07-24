export function formatDateToDDMMYYYY(date: string): string {
  const options: Intl.DateTimeFormatOptions = {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }
  const formatter = new Intl.DateTimeFormat('pt-BR', options)
  return formatter.format(new Date(date))
}

export function formatPhoneNumber(phone: string): string {
  const digitsOnly = phone.replace(/\D/g, '')

  if (digitsOnly.length === 13) {
    return `+${digitsOnly.substring(0, 2)} (${digitsOnly.substring(2, 4)}) ${digitsOnly.substring(4, 9)}-${digitsOnly.substring(9)}`
  } else if (digitsOnly.length === 12) {
    return `+${digitsOnly.substring(0, 2)} (${digitsOnly.substring(2, 4)}) ${digitsOnly.substring(4, 8)}-${digitsOnly.substring(8)}`
  }
  return phone
}
