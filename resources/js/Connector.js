import { connect } from 'react-redux';
import MainPageView from './MainPageView';
import { Creators as NoticeCreators } from './reducers/notice';
import {
  selectEmail,
} from './selectors';

/**
 * Подключение свойств Redux в свойства компонента.
 * @param {Object} state Состояние приложения из Redux-хранилища.
 * @return {Object} Свойства компонента.
 */
const mapStateToProps = state => {
  return {
    email: selectEmail(state),
  };
};

/**
 * Подключение событий к компоненту.
 * @param {Function} dispatch Метод для вызова действия.
 * @return {Object} Свойства компонента.
 */
const mapDispatchToProps = dispatch => ({
  requestNotice: (email, name) => dispatch(NoticeCreators.request(email, name)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPageView);
