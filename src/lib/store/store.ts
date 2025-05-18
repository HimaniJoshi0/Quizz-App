// store/useStore.js
import { create } from 'zustand'
import { QuizzDataTypes } from '../types'
import { dummyData } from '../data'

// Define the types for the store state and actions
interface StoreState {
    quizzData: QuizzDataTypes
    updateQuizzData: (data: QuizzDataTypes) => void
}

const useStore = create<StoreState>((set) => ({
    quizzData: dummyData as QuizzDataTypes,
    updateQuizzData: (data: QuizzDataTypes) => set({ quizzData: data }),
}))

export default useStore
