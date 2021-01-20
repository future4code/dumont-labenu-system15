export const checkDate = (date: string): boolean => {
    const userPattern = date.includes('/')

    if (userPattern) {
        return true
    } else {
        return false
    }
}