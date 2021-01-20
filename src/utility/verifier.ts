export const verifyString = (strObj: any): void => {
    for (let str in strObj) {
        if (typeof strObj[str] !== "string") {
            throw new Error(`${str} is of the wrong type: ${typeof strObj[str]} instead of string.`)
        } else if (strObj[str] === "") {
            throw new Error("A required field is empty.")
        }

    }
}


export const verifyNumber = (id: any): void => {
    if (isNaN(Number(id))) {
        throw new Error(`ID is invalid: must be a number.`)
    }
}


export const verifyBodyKeys = (reqObj: any, validKeys: string[]): void => {
    if (Object.keys(reqObj).length < validKeys.length) {
        throw new Error("Missing key(s) in requisition body.")
    } else if (Object.keys(reqObj).length > validKeys.length) {
        throw new Error("Found extra key(s) in requisition body.")
    }

    for (let key in reqObj) {
        if (!validKeys.includes(key)) {
            throw new Error("Invalid key in requisition body.")
        }

        if (!reqObj[key]) {
            throw new Error("Empty value in a required key.")
        }
    }
}