import { PostType } from './../types/types';
import { AppStateType } from './../reduxStore';

export const getNews = (state: AppStateType): Array<PostType> => {
    return state.newsReducer.postsData;
}