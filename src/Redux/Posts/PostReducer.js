import * as actions from '../Posts/PostActions'

export const initialState = {
    posts: [],
    loading: false,
    hasErrors: false,
}

export default function postsReducer(state = initialState, action) {
    switch (action.type) {
        case actions.GET.POSTS:
            return { ...state, loading: true }
        case actions.GET_POSTS_SUCCESS:
            return { posts: action.payload, loading: false, hasError: false }
        case actions.GET_POSTS_FAILURE:
            return { ...state, loading: false, hasErrors: true }
        default:
            return state
    }
}