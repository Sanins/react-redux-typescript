export type Action = {type: string, payload: string;}

export const addNote = (note:string):Action => ({
    type: "ADD_NOTE", payload: note
})

export const removeNote = (note:string):Action => ({
    type: "REMOVE_NOTE", payload: note
})