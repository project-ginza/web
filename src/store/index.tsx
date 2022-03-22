import { devtools } from 'zustand/middleware'
import create, { StateCreator } from 'zustand'
import produce, { Draft } from 'immer'

// Turn the set method into an immer proxy
const immer =
  <T extends State>(
    config: StateCreator<T, (fn: (draft: Draft<T>) => void) => void>
  ): StateCreator<T> =>
  (set, get, api) =>
    config((fn) => set(produce<T>(fn)), get, api)

// global state type
type State = {
    counter: number;
    addCounter: () => void;
}

const useStore = create<State>(devtools(

    immer((set) => ({
      counter: 0,
      addCounter: () => set((state) => void (state.counter++)),
    }))

))

export default useStore;