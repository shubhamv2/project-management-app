export const findListForCard = (state, cardId) =>{
    return Object.values(state.lists).find(list=>list.cardIds.includes(cardId));
}