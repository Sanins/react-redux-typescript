import { Action } from "../actions/actions"

export interface NotesState {
    notes: string[]
}

const initalState = {
    notes: []
}

export const notesReducer = (state:NotesState = initalState, action: Action) => {
    switch(action.type) {
        case "ADD_NOTE": {
            return { ...state, notes: [...state.notes, action.payload]}
        }
        case "REMOVE_NOTE": {
            const ary = [...state.notes]
            const filteredAry = ary.filter(e => e !== action.payload)
            return { ...state, notes: filteredAry}
        }
        default:
            return state
    }
}

