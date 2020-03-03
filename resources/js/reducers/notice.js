import { createReducer, createActions } from 'reduxsauce';
import { DATA_STATES_TYPES } from '../service/constants';
import * as commonReducers from './common-reducers';

export const { Types, Creators } = createActions(
  {
    success: ['data'],
    failure: ['error'],
    setEmail: ['value'],
    setName: ['value'],
    request: [],
    setData: ['data'],
    setError: ['error'],
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
    data: {},
    email: '',
    name: '',
    error: '',
  };
}

/**
 * Записывает имя.
 * @param {Object} state Состояние приложения.
 * @param {string} value Значение переменной.
 * @returns {Object} Объект с записанными данными
 */
export const setName = (state, { value = '' }) => {
  return { ...state, name: value, error: '' };
};

/**
 * Записывает email.
 * @param {Object} state Состояние приложения.
 * @param {string} value Значение переменной.
 * @returns {Object} Объект с записанными данными
 */
export const setEmail = (state, { value = '' }) => {
  return { ...state, email: value, error: '' };
};

/**
 * Записывает email.
 * @param {Object} state Состояние приложения.
 * @param {string} value Значение переменной.
 * @returns {Object} Объект с записанными данными
 */
export const setError = (state, { error = '' }) => {
  return { ...state, error };
};

export default createReducer(getInitialState(), {
  [Types.SUCCESS]: commonReducers.success,
  [Types.FAILURE]: commonReducers.failure,
  [Types.REQUEST]: commonReducers.request,
  [Types.SET_EMAIL]: setEmail,
  [Types.SET_NAME]: setName,
  [Types.SET_ERROR]: setError,
});
