export const checkDate = (date: string): void => {
    const userPattern = date.includes('/')

    if (!userPattern) {
        throw new Error("Please provide dates in the format DD/MM/YYYY.")
    }
}