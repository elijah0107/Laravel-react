import { createSelector } from 'reselect';
import get from 'lodash/get';

/**
 * Возвращает данные формы заказа.
 * @param {Object} state Состояние приложения.
 * @returns {Object} Данные формы заказа.
 */
export const selectEmail = state => get(state, 'notice') || {};

/**
 * Возвращает данные значения комментария в заказе.
 * @param {Object} state Состояние приложения.
 * @returns {string} Данные значения комментария в заказе.
 */
export const getCommentFieldValue = createSelector(
  selectEmail,
  comment => get(comment, 'value', '')
);

/**
 * Набор селекторов.
 * Вложенные селекторы должны браться отсюда для возможности тестирования.
 * @type {Object}
 */
const Selectors = {
  selectEmail,
  getCommentFieldValue,
};

export default Selectors;
