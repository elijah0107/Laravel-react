import { createSelector } from 'reselect';
import get from 'lodash/get';

/**
 * Возвращает данные формы заказа.
 * @param {Object} state Состояние приложения.
 * @returns {Object} Данные формы заказа.
 */
export const selectEmail = state => get(state, 'notice.email', '');

/**
 * Возвращает данные формы заказа.
 * @param {Object} state Состояние приложения.
 * @returns {Object} Данные формы заказа.
 */
export const selectName = state => get(state, 'notice.name', '');

/**
 * Возвращает данные формы заказа.
 * @param {Object} state Состояние приложения.
 * @returns {Object} Данные формы заказа.
 */
export const selectError = state => get(state, 'notice.error', '');

/**
 * Возвращает данные которые вернулись из апи.
 * @param {Object} state Состояние приложения.
 * @returns {Object} Данные формы заказа.
 */
export const selectData = state => get(state, 'notice.data', '');

/**
 * Возвращает данные значения комментария в заказе.
 * @param {Object} state Состояние приложения.
 * @returns {string} Данные значения комментария в заказе.
 */
export const getCommentFieldValue = createSelector(
  selectEmail,
  comment => get(comment, 'value', '')
);
