export const formatDate = (date: string): string => {
    const [day, month, year] = date.split('/')
    return `${year}-${month}-${day}`
}