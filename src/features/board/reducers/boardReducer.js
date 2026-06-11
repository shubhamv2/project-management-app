import { boardActions } from "../constant/boardActions";
export const boardReducer = (state, action) => {
    switch (action.type) {
        case boardActions.CREATE_BOARD:
            return {
                ...state,
                boards: [...state.boards, action.payload]
            }
        case boardActions.CREATE_LIST: {
            const { boardId, newList } = action.payload;
            const updatedBoards = state.boards.map(board => board.id === boardId ? { ...board, listIds: [...board.listIds, newList.id] } : board)
            return {
                ...state,
                boards: updatedBoards,
                lists: {
                    ...state.lists,
                    [newList.id]: newList,
                }
            }
        }

        case boardActions.CREATE_CARD: {
            const { listId, newCard } = action.payload;
            return {
                ...state,
                lists: { ...state.lists, [listId]: { ...state.lists[listId], cardIds: [...state.lists[listId].cardIds, newCard.id] } },
                cards: { ...state.cards, [newCard.id]: newCard },
            }
        }
        case boardActions.MOVE_CARD: {
            const { cardId, sourceListId, destinationListId, sourceIndex, destinationIndex } = action.payload;
            const sourceList = state.lists[sourceListId];
            const destinationList = state.lists[destinationListId]
            //same list reorder
            if (sourceListId === destinationListId) {
                const updatedIds = [...sourceList.cardIds];
                updatedIds.splice(sourceIndex, 1);
                updatedIds.splice(destinationIndex, 0, cardId);

                return {
                    ...state,
                    lists: { ...state.lists, [sourceListId]: { ...sourceList, cardIds: updatedIds } }
                }
            }


            //move between lists
            const sourceIds = [...sourceList.cardIds]
            const destinationIds = [...destinationList.cardIds]
            sourceIds.splice(sourceIndex, 1);
            destinationIds.splice(destinationIndex, 0, cardId);
            return { ...state, lists: { ...state.lists, [sourceListId]: { ...sourceList, cardIds: sourceIds }, [destinationListId]: { ...destinationList, cardIds: destinationIds } } };

        }



        case boardActions.ADD_CHECK_LIST: {
            const { cardId, newCheckList } = action.payload;
            return {
                ...state,
                cards: {
                    ...state.cards,
                    [cardId]: {
                        ...state.cards[cardId],
                        checkLists: [...state.cards[cardId].checkLists, newCheckList]
                    }
                }
            }
        }

        case boardActions.TOGGLE_CHECK_LIST:
            return {
                ...state,
                cards: {
                    ...state.cards,
                    [action.payload.cardId]: {
                        ...state.cards[action.payload.cardId],
                        checkLists: state.cards[action.payload.cardId].checkLists.map(checkList => {
                            return checkList.id === action.payload.checkListId ? { ...checkList, isCompleted: !checkList.isCompleted } : checkList;
                        })
                    }
                }
            }
        case boardActions.DELETE_CARD: {
            const currentListId = Object.keys(state.lists).find(listId => state.lists[listId].cardIds.includes(action.payload));
            if (!currentListId) return state;
            const updatedCards = { ...state.cards };
            delete updatedCards[action.payload];
            return {
                ...state,
                lists: {
                    ...state.lists,
                    [currentListId]: {
                        ...state.lists[currentListId],
                        cardIds: state.lists[currentListId].cardIds.filter(cardId => cardId !== action.payload),
                    }
                },
                cards: updatedCards,
            }
        }



        case boardActions.ADD_COMMENT: {
            const { cardId, newComment } = action.payload;
            return {
                ...state,
                cards: {
                    ...state.cards,
                    [cardId]: {
                        ...state.cards[cardId],
                        comments: [
                            ...state.cards[cardId].comments,
                            newComment,
                        ]
                    }
                }
            }
        }


        case boardActions.ADD_MEMBER: {
            const { cardId, members } = action.payload;
            return {
                ...state,
                cards: {
                    ...state.cards,
                    [cardId]: {
                        ...state.cards[cardId],
                        members: [...state.cards[cardId].members, ...members]
                    }
                }
            }
        }

        case boardActions.CHANGE_DUE_DATE: {
            const { cardId, date } = action.payload;
            return {
                ...state,
                cards: {
                    ...state.cards,
                    [cardId]: {
                        ...state.cards[cardId],
                        dueDate: date,
                    }
                }
            }
        }


        default:
            return state;
    }
}