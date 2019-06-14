import { createReducer, createActions } from 'reduxsauce';
import { DATA_STATES_TYPES } from '../service/constants';
import * as commonReducers from './common-reducers';

export const { Types, Creators } = createActions(
  {
    request: ['pageNumber'],
    success: ['data'],
    failure: ['error'],
  },
  { prefix: 'orders/' }
);

/**
 * Возвращает начальное состояние.
 * @return {Object} Начальное состояние.
 */
export function getInitialState () {
  return {
    state: DATA_STATES_TYPES.initial,
    data: [],
  };
}

export default createReducer(getInitialState(), {
  [Types.REQUEST]: commonReducers.request,
  [Types.SUCCESS]: commonReducers.success,
  [Types.FAILURE]: commonReducers.failure,
});
