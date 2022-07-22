import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './rootsaga';

import TodoSlice from '../Pages/Todo/Action/ruducer/TodoSlice';

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const appStateStore = {} as any;

let appState: any = {};
// if (appStateStore) {
//   appState = false ? {} : JSON.parse(appStateStore);
// }

export const store = configureStore({
  reducer: {
    todo: TodoSlice
  },
  // preloadedState: appState,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware),
});
sagaMiddleware.run(rootSaga);

function handleChange() {
  const state = store.getState();
  //console.log('app state', state);
  // localStorage.setItem('app_state', JSON.stringify(state));
}

store.subscribe(handleChange);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;