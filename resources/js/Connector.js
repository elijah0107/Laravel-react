import { connect } from 'react-redux';
import MainPageView from './MainPageView';
import { Creators as NoticeCreators } from './reducers/notice';
import {
  selectEmail,
  selectName,
  selectError,
  selectData,
} from './selectors';

/**
 * Подключение свойств Redux в свойства компонента.
 * @param {Object} state Состояние приложения из Redux-хранилища.
 * @return {Object} Свойства компонента.
 */
const mapStateToProps = state => {
  return {
    email: selectEmail(state),
    name: selectName(state),
    error: selectError(state),
    data: selectData(state),
  };
};

/**
 * Подключение событий к компоненту.
 * @param {Function} dispatch Метод для вызова действия.
 * @return {Object} Свойства компонента.
 */
const mapDispatchToProps = dispatch => ({
  onChangeEmail: event => event && event.target && dispatch(NoticeCreators.setEmail(event.target.value)),
  onChangeName: event => event && event.target && dispatch(NoticeCreators.setName(event.target.value)),
  onSubmit: () => dispatch(NoticeCreators.request()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPageView);
