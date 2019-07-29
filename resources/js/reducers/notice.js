import { createReducer, createActions } from 'reduxsauce';
import { DATA_STATES_TYPES } from '../service/constants';
import * as commonReducers from './common-reducers';

export const { Types, Creators } = createActions(
  {
    request: ['pageNumber'],
    success: ['data'],
    failure: ['error'],
    setInfo: ['name', 'value'],
  },
  { prefix: 'notice/' }
);

/**
 * Возвращает начальное состояние.
 * @return {Object} Начальное состояние.
 */
export function getInitialState () {
  return {
    state: DATA_STATES_TYPES.initial,
    data: [],
    email: '',
    name: '',
  };
}

/**
 * Записывает данные в хранилище.
 * @param {Object} state Состояние приложения.
 * @param {string} name Имя переменной, которую нужно записать.
 * @param {string} value Значение переменной.
 * @returns {Object} Объект с записанными данными
 */
export const setInfo = (state, { name, value }) => {
  return { ...state, [name]: value };
};

export default createReducer(getInitialState(), {
  [Types.REQUEST]: commonReducers.request,
  [Types.SUCCESS]: commonReducers.success,
  [Types.FAILURE]: commonReducers.failure,
  [Types.SET_INFO]: setInfo,
});
