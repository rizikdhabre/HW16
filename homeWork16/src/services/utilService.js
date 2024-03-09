import ShortUniqueId from "short-unique-id"

function generateId(length=8){
    const { randomUUID } = new ShortUniqueId()
    return randomUUID(length)
}

export const utilService = {generateId }