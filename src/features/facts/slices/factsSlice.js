import { createSlice } from "@reduxjs/toolkit";

const factsSlice = createSlice({
    name: 'facts',
    initialState: {
        initialFacts: [
            'прообразом Чубакки стал пёс режиссёра',
            'актёрам разрешили подобрать любимый цвет для своих световых мечей',
            'в фильме «Звёздные войны-V: Империя наносит ответный удар» среди космических объектов можно заметить парящий ботинок и картофелину',
            'дыхание Дарта Вейдера — это звуки дыхательной маски, подключённой к аквалангу',
            'планета Татуин названа в честь реального города в Тунисе — стране, где происходила часть съёмок',
        ],
        requestedFacts: []
    },
    reducers: {
        outputFacts(state, action) {
            state.requestedFacts.length = 0;
            state.requestedFacts = state.initialFacts.slice(0, action.payload)
        }
    }
})

export const { outputFacts } = factsSlice.actions;
export default factsSlice.reducer;