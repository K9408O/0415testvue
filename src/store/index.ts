// src/store/index.ts
import { createStore } from 'vuex'

// 定義型別（TypeScript friendly）
export interface State {
    author: string
    likes: number
}

const store = createStore<State>({
    state: {
        author: 'allen',
        likes: 0
    },
    mutations: {
        incrementLikes(state) {
            state.likes++
        }
    }
})

export default store
