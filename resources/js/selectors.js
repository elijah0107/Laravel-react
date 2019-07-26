import { createSelector, createStructuredSelector } from 'reselect'
import get from 'lodash/get'
import omit from 'lodash/omit'
import prop from 'lodash/fp/prop'
import propEq from 'lodash/fp/propEq'
import isUndefined from 'lodash/isUndefined'
import sumBy from 'lodash/sumBy'
import { isNumeric } from 'helpers/number-helpers'
import {
  PERSON_TYPE,
  DATA_STATES_TYPES,
  DADATA_PARTY_TYPES_IDS,
} from 'es6/constants'

/**
 * Возвращает данные формы заказа.
 * @param {Object} state Состояние приложения.
 * @returns {Object} Данные формы заказа.
 */
export const selectForm = state => get(state, 'form') || {}

/**
 * Возвращает данные формы выбора типа оплаты.
 * @param {Object} state Состояние приложения.
 * @returns {Object} Данные формы выбора типа оплаты.
 */
export const selectPayment = state => get(state, 'payment') || {}

/**
 * Возвращает данные формы заказа.
 * @param {Object} state Состояние приложения.
 * @returns {Object} Данные формы заказа.
 */
export const selectShipmentsForm = state => get(state, 'shipmentsForm') || {}

/**
 * Возвращает данные комментария в заказе.
 * @param {Object} state Состояние приложения.
 * @returns {Object} Данные комментария в заказе.
 */
export const selectComment = state => get(state, 'comment') || {}

/**
 * Возвращает данные значения комментария в заказе.
 * @param {Object} state Состояние приложения.
 * @returns {string} Данные значения комментария в заказе.
 */
export const getCommentFieldValue = createSelector(
  selectComment,
  comment => get(comment, 'value', '')
)

/**
 * Возвращает данные ошибки комментария в заказе.
 * @param {Object} state Состояние приложения.
 * @returns {string} Данные ошибки комментария в заказе.
 */
export const getCommentFieldError = createSelector(
  selectComment,
  comment => get(comment, 'error', '')
)

/**
 * Возвращает данные формы контактной информации.
 * @param {Object} state Состояние приложения.
 * @returns {Object} Данные формы контактной информации.
 */
export const selectContactForm = state => get(state, 'contactForm') || {}

/**
 * Возвращает введенные данные контактов.
 * @param {Object} state Состояние приложения.
 * @returns {Object} Введенные контактные данные.
 */
export const getContactFieldValues = createSelector(
  selectContactForm,
  contactForm => get(contactForm, 'contacts') || {}
)

/**
 * Возвращает введенные данные юридического лица.
 * @param {Object} state Состояние приложения.
 * @returns {Object} Введенные данные юридического лица.
 */
export const getLegalEntityFieldValues = createSelector(
  selectContactForm,
  contactForm => get(contactForm, 'legalEntity') || {}
)

/**
 * Возвращает объект с данными текущего пользователя.
 * @param {Object} state Состояние приложения.
 * @returns {Object} Данные пользователя.
 */
export const selectUser = state => get(state, 'user') || {}

/**
 * Возвращает объект с данными заказа.
 * @param {Object} state Состояние приложения.
 * @returns {Object} Данные заказа.
 */
export const selectOrder = state => get(state, 'order') || {}

/**
 * Возвращает раздел данных доставки.
 * @param {Object} state Состояние приложения.
 * @returns {Object} Данные доставки.
 */
export const selectDelivery = state => get(state, 'delivery') || {}

/**
 * Возвращает раздел данных организаторов СП.
 * @param {Object} state Состояние приложения.
 * @returns {Object} Данные доставки.
 */
export const selectJpPurchase = state => get(state, 'jpPurchase') || {}

/**
 * Возвращает раздел опций формы.
 * @param {Object} state Состояние приложения.
 * @returns {Object} Раздел опций формы.
 */
export const selectFormOptions = state => get(state, 'formOptions') || {}

/**
 * Возвращает объект с данными текущего города.
 * @param {Object} state Состояние приложения.
 * @returns {Object} Данные текущего города.
 */
export const selectSettlement = state => get(state, 'settlement.current') || {}

/**
 * Возвращает номер загруженной страницы товаров УС.
 * @param {Object} state Состояние приложения.
 * @returns {number} Номер загруженной страницы товаров УС.
 */
export const selectRemoteItemPage = state => get(state, 'remoteItem.page')

/**
 * Возвращает стоимость товаров в заказе.
 * @param {Object} state Объект с данными состояния.
 * @returns {number} Стоимость товаров в заказе.
 */
export const selectCartItemsSum = state => Number(get(state, 'cart.data.itemsSum')) || 0

/**
 * Возвращает КЛАДР-идентификатор текущего города доставки.
 * @param {Object} state Состояние приложения.
 * @returns {number} КЛАДР-идентификатор текущего города доставки.
 */
export const selectSettlementKladrId = state => get(state, 'settlement.current.kladr_id')

/**
 * Возвращает идентификатор текущего города доставки.
 * @param {Object} state Состояние приложения.
 * @returns {number} Идентификатор текущего города доставки.
 */
export const selectCurrentSettlementId = state => get(state, 'settlement.current.id')

/**
 * Возвращает массив идентификаторов городов в которые доступна доставка товаров-транзитов из текущей корзины.
 * @param {Object} state Состояние приложения.
 * @returns {Array<number>} Массив идентификаторов городов.
 */
export const selectTransitSettlementsIds = state => get(state, 'cart.data.transitSettlementsIds')

/**
 * Возвращает закупки текущего пользователя.
 * @param {Object} state Состояние приложения.
 * @returns {(Array|undefined)} Закупки текущего пользователя.
 */
export const selectJpRequests = state => get(state, 'form.jp_requests')

/**
 * Возвращает идентификатор выбранного типа оплаты.
 * @param {Object} state Состояние приложения.
 * @returns {number} Идентификатор выбранного типа оплаты.
 */
export const getSelectedPaymentTypeId = createSelector(
  selectPayment,
  payment => get(payment, 'selectedItemId')
)

/**
 * Возвращает данные самостоятельных отгрузок.
 * @param {Object} state Состояние приложения.
 * @returns {Array<Object>} Данные самостоятельных отгрузок.
 */
export const selectShipmentsData = createSelector(
  selectShipmentsForm,
  shipmentsForm => get(shipmentsForm, 'shipments')
)

/**
 * Возвращает данные полей адреса доставки самостоятельных отгрузок.
 * @param {Object} state Состояние приложения.
 * @returns {Object} Данные полей адреса доставки самостоятельных отгрузок.
 */
export const selectShipmentsAddress = createSelector(
  selectShipmentsForm,
  shipmentsForm => get(shipmentsForm, 'address')
)

/**
 * Возвращает данные корзины.
 * @param {Object} state Состояние приложения.
 * @returns {Object} Данные корзины.
 */
export const selectCartData = state => get(state, 'cart.data') || {}

/**
 * Возвращает сумму скидки.
 * @param {Object} state Состояние приложения.
 * @returns {number} Сумма скидки.
 */
export const selectOrderDiscountsSum = createSelector(
  selectCartData,
  cartData => Number(get(cartData, 'discountsSum')) || 0
)

/**
 * Возвращает булево значение, определяющее является ли пользователь гостем из store.
 * @param {Object} state Состояние приложения.
 * @returns {boolean} Булево значение, определяющее является ли пользователь гостем из store.
 */
export const selectIsGuest = createSelector(
  selectUser,
  user => Boolean(get(user, 'isGuest'))
)

/**
 * Возвращает список организаторов СП из store.
 * @param {Object} state Состояние приложения.
 * @returns {Array} Список районов доставки всех организаторами.
 */
export const selectJpOrganizers = state => Array.from(get(state, 'jpPurchase.items') || [])

/**
 * Возвращает из store значение, определяющее, является ли заказ заказом с удаленного склада.
 * @param {Object} state Состояние приложения.
 * @returns {boolean} Значение, определяющее, является ли заказ заказом с удаленного склада.
 */
export const selectFormIsRemoteOrder = state => Boolean(get(state, 'form.remote_order'))

/**
 * Возвращает список типов доставки.
 * @param {Object} state Состояние приложения.
 * @returns {Array} Список типов доставки.
 * @todo заменить list на deliveryGroupsMap SL-22807
 */
export const selectDeliveryGroups = state => Array.from(get(state, 'delivery.list') || [])

/**
 * Возвращает данные текущего города.
 * @param {Object} state Состояние приложения.
 * @returns {Object} Данные текущего города.
 */
export const selectCurrentSettlement = state => get(state, 'settlement.current') || {}

/**
 * Возвращает тип заказа.
 * @param {Object} state Состояние приложения.
 * @returns {string} Тип заказа.
 */
export const selectFormType = state => get(state, 'form.type')

/**
 * Возвращает список активных групп доставок (доступных для выбора).
 * @param {Object} state Состояние приложения.
 * @returns {Array} Список активных групп доставок.
 * @todo заменить is_enabled на isEnabled SL-22807
 */
export function selectEnabledDeliveryGroups (state) {
  const deliveryGroups = Selectors.selectDeliveryGroups(state)
  return Array.from(deliveryGroups || []).filter(group => group && group.is_enabled)
}

/**
 * Возвращает массив с данными о наценках.
 * @param {Object} state Состояние приложения.
 * @returns {Array} Массив с данными о наценках.
 */
export const selectCostModifiers = createSelector(
  selectCartData,
  cartData => get(cartData, 'costModifiers') || []
)

/**
 * Возвращает идентификатор группы доставки, данные которой отображаются в модальном окне в данный момент.
 * @param {Object} state Состояние приложения.
 * @returns {number} Идентификатор группы доставки.
 */
export const getViewedDeliveryGroupId = createSelector(
  selectDelivery,
  delivery => get(delivery, 'selectedGroupId')
)

/**
 * Возвращает список групп типов доставок для самостоятельных отгрузок.
 * @param {Object} state Состояние приложения.
 * @returns {Array<Object>} Список групп типов доставок для самостоятельных отгрузок.
 */
export function getShipmentsDeliveryGroups (state) {
  const { shipmentsForm = {} } = state || {}
  const { deliveryGroupsMap = {} } = shipmentsForm || {}
  return Object.values(deliveryGroupsMap || {})
}

/**
 * Возвращает выбранный тип оплаты при его наличии.
 * @param {Object} state Состояние приложения.
 * @returns {(Object|undefined)} Выбранный тип оплаты.
 */
export const selectSelectedPaymentType = createSelector(selectPayment, payment => {
  const { collection: paymentTypes = {}, selectedItemId } = payment || {}
  return paymentTypes && paymentTypes[selectedItemId]
})

/**
 * Возвращает отсортированный список типов оплаты.
 * @param {Object} state Текущее состояние.
 * @returns {Array<Object>} Список типов оплаты.
 */
export const selectPaymentTypes = createSelector(selectPayment, payment => {
  const { collection = {} } = payment || {}
  return Object.values(collection || {}).sort((a, b) => {
    a = a || {}
    b = b || {}
    return a.weight - b.weight || 0
  })
})

/**
 * Возвращает стоимость товаров в заказе по текущему состоянию приложения.
 * @param {Object} state Состояние приложения.
 * @returns {number} Стоимость товаров в заказе.
 */
export function selectOrderItemsSum (state) {
  const isRemoteOrder = Selectors.selectFormIsRemoteOrder(state)
  const { itemsSum, remoteItemsSum } = Selectors.selectCartData(state) || {}
  return Number(isRemoteOrder ? remoteItemsSum : itemsSum) || 0
}

/**
 * Возвращает стоимость доставки заказа по текущему состоянию приложения.
 * @param {Object} state Состояние приложения.
 * @returns {number} Стоимость доставки.
 */
export function selectOrderDeliverySum (state) {
  state = state || {}
  const delivery = state.delivery || {}
  const jpPurchase = state.jpPurchase || {}
  const shipmentsForm = state.shipmentsForm || {}
  const hasDeliveryGroups = Object.keys(delivery.deliveryGroupsMap || {}).length > 0
  const hasShipments = Array.isArray(shipmentsForm.shipments) && shipmentsForm.shipments.length > 0
  const selectedJpAddressDistrict = jpPurchase.selectedAddressDistrict
  const selectedJpPickupPoint = jpPurchase.selectedPickupPoint
  let deliverySum = 0
  if (hasDeliveryGroups) {
    deliverySum = Selectors.getSelectedDeliveryTypeSum(state)
  } else if (hasShipments) {
    deliverySum = Selectors.selectShipmentsDeliverySum(state)
  }
  if (selectedJpAddressDistrict && selectedJpAddressDistrict.sum) {
    deliverySum = selectedJpAddressDistrict.sum
  }
  if (selectedJpPickupPoint && selectedJpPickupPoint.sum) {
    deliverySum = selectedJpPickupPoint.sum
  }
  return Number(deliverySum) || 0
}

/**
 * Возвращает список типов доставки по переданному идентификатору группы.
 * @param {Object} state Текущее состояние.
 * @param {number} groupId Идентификатор группы.
 * @returns {Array<Object>} Cписок типов доставки.
 */
export function getDeliveryGroupItems (state, groupId) {
  const { deliveryTypesMap = {} } = selectDelivery(state)
  return Object.values(deliveryTypesMap || {}).filter(propEq('groupId', groupId))
}

/**
 * Возвращает список услуг всех доставок.
 * @param {Object} state Текущее состояние.
 * @returns {Array<Object>} Список услуг всех доставок
 */
export const selectDeliveryTypesServices = createSelector(selectDelivery, delivery => {
  const { servicesMap = {} } = delivery || {}
  return Object.values(servicesMap || {})
})

/**
 * Возвращает данные выбранной группы доставки.
 * @param {Object} state Текущее состояние.
 * @returns {(Object|null)} Данные выбранной группы доставки.
 */
export const getSelectedDeliveryGroup = createSelector(selectDelivery, delivery => {
  const {
    selectedData = {},
    deliveryTypesMap = {},
    deliveryGroupsMap = {},
  } = delivery || {}
  const { deliveryTypeId } = selectedData || {}
  const { [deliveryTypeId]: selectedDeliveryType = {} } = deliveryTypesMap || {}
  const { groupId } = selectedDeliveryType || {}
  const { [groupId]: selectedDeliveryGroup } = deliveryGroupsMap || {}
  return selectedDeliveryGroup || null
})

export const getShownDeliveryGroupItems = createSelector(
  selectDelivery,
  delivery => {
    const {
      selectedGroupId,
      deliveryTypesMap = {},
    } = delivery || {}
    return Object.values(deliveryTypesMap || {}).filter(propEq('groupId')(selectedGroupId))
  }
)

/**
 * Возвращает список типов отгрузок.
 * @param {Object} state Текущее состояние.
 * @param {number} [deliveryTypeId] Идентификатор выбранного типа доставки, при передаче вернутся его только типы.
 * @returns {Array<Object>} Список типов отгрузок.
 */
export function getShipmentTypes (state, deliveryTypeId) {
  const { delivery = {} } = state || {}
  const { shipmentTypesMap = {} } = delivery || {}
  let shipmentTypes = Object.values(shipmentTypesMap || {})
  if (isNumeric(deliveryTypeId)) {
    shipmentTypes = shipmentTypes.filter(propEq('deliveryTypeId')(deliveryTypeId))
  }
  return shipmentTypes.sort((a, b) => {
    const { id: aId } = a || {}
    const { id: bId } = b || {}
    return aId - bId
  })
}

/**
 * Возвращает данные типа доставки.
 * @param {Object} state Текущее состояние.
 * @param {number} deliveryTypeId Идентификатор типа доставки.
 * @returns {Object} Данные типа доставки.
 */
export function getDeliveryType (state, deliveryTypeId) {
  const { delivery = {} } = state || {}
  const { deliveryTypesMap = {} } = delivery || {}
  const { [deliveryTypeId]: deliveryType } = deliveryTypesMap || {}
  return deliveryType || null
}

/**
 * Возвращает выбранный тип отгрузок, соответствующий выбранному типу доставки.
 * @param {Object} state Состояние приложения.
 * @returns {(Object|undefined)} Выбранный тип отгрузок.
 */
export const getSelectedShipmentType = createSelector(selectDelivery, delivery => {
  const { selectedData, shipmentTypesMap } = delivery || {}
  const { deliveryTypeId, shipmentsTypeId } = selectedData || {}
  let result
  if (shipmentTypesMap) {
    result = shipmentTypesMap[`${deliveryTypeId}-${shipmentsTypeId}`]
  }
  return result
})

/**
 * Возвращает текущее количество отгрузок.
 * @param {Object} state Текущее состояние.
 * @returns {number} Текущее количество отгрузок.
 */
export const selectShipmentsCount = createSelector(getSelectedShipmentType, shipmentType => {
  const { shipments } = shipmentType || {}
  return Array.isArray(shipments) ? shipments.length : 0
})

/**
 * Возвращает выбранные пользователем данные отгрузок.
 * @param {Object} state Текущее состояние.
 * @returns {Array<Object>} Выбранные пользователем данные отгрузок.
 */
export const getSelectedShipmentsData = createSelector(selectDelivery, delivery => {
  const { selectedData = {} } = delivery || {}
  const { shipments = [] } = selectedData || {}
  return Array.from(shipments || [])
})

/**
 * Возвращает все текущие данные отгрузок.
 * @param {Object} state Текущее состояние.
 * @returns {Array<Object>} Все текущие данные отгрузок.
 */
export const getSelectedShipments = createSelector(
  getSelectedDeliveryGroup,
  getSelectedShipmentType,
  getSelectedShipmentsData,
  (deliveryGroup, shipmentsType, shipmentsData) => {
    const { shipments = [] } = shipmentsType || {}
    const { name: legend = '' } = deliveryGroup || {}

    return Array.from(shipmentsData || []).map((shipmentData, index) => {
      const {
        dateIndex,
        timeIntervalIndex,
        servicesIds = [],
      } = shipmentData || {}
      const shipment = Array.isArray(shipments) ? shipments[index] : {}
      const { cost, dates: availableDates = [], services = [], ...restShipmentData } = shipment || {}
      const selectedDate = Array.isArray(availableDates)
        ? availableDates[dateIndex]
        : null
      const { intervals: availableTimeIntervals = [] } = selectedDate || {}
      const selectedTimeInterval = Array.isArray(availableTimeIntervals)
        ? availableTimeIntervals[timeIntervalIndex]
        : null
      let shipmentCost = cost
      if (selectedDate && !isUndefined(selectedDate.cost)) {
        shipmentCost = selectedDate.cost
        if (selectedTimeInterval && !isUndefined(selectedTimeInterval.cost)) {
          shipmentCost = selectedTimeInterval.cost
        }
      }
      return {
        ...restShipmentData,
        servicesIds,
        services: Array.from(services || []).map(service => {
          const { id: serviceId } = service || {}
          return {
            ...service,
            isSelected: Array.isArray(servicesIds) && servicesIds.includes(serviceId),
          }
        }),
        cost: shipmentCost,
        legend,
        selectedDate,
        availableDates,
        selectedTimeInterval,
        availableTimeIntervals,
      }
    })
  }
)

/**
 * Возвращает выбранные данные доставки, готовые к сохранению в sessionStorage.
 * @param {Object} state Текущее состояние.
 * @returns {Object} Выбранные данные доставки, готовые к сохранению в sessionStorage.
 */
export const getCleanDeliveryData = createSelector(
  selectDelivery,
  getSelectedShipments,
  (delivery, selectedShipments) => {
    const { selectedData = {} } = delivery || {}

    return {
      ...selectedData,
      shipments: Array.from(selectedShipments || []).map(shipment => {
        const { servicesIds = [] } = shipment || {}
        return {
          servicesIds,
          date: get(shipment, 'selectedDate.date'),
          timeInterval: omit(get(shipment, 'selectedTimeInterval'), ['index']),
        }
      }),
    }
  }
)

/**
 * Возвращает выбранные услуги выбранного типа отгрузок.
 * @param {Object} state Текущее состояние.
 * @returns {Array<Object>} Выбранные услуги выбранного типа отгрузок.
 */
export const getSelectedShipmentsServices = createSelector(
  getSelectedShipments,
  shipments => {
    return Array.from(shipments || []).reduce((result, shipment) => {
      const { services = [] } = shipment || {}
      return Array.from(services || []).filter(prop('isSelected')).concat(result)
    }, [])
  }
)

/**
 * Возвращает список всех выбранных услуг доставки (включая услуги отгрузок).
 * @param {Object} state Текущее состояние.
 * @returns {Array<Object>} Список выбранных услуг доставки.
 */
export const selectSelectedServices = createSelector(
  selectForm,
  selectDelivery,
  getSelectedShipmentsServices,
  (form, delivery, shipmentTypeServices) => {
    const { extra_services: selectedServicesIds = [] } = form || {}
    const { servicesMap = {} } = delivery || {}
    const deliveryTypesServices = Object.values(servicesMap || {})
    return deliveryTypesServices
      .filter(service => service && selectedServicesIds.includes(service.id))
      .concat(shipmentTypeServices)
      .reduce((result, service, index, services) => {
        const { id, price } = service || {}
        const sameServiceIndex = result.findIndex(propEq('id')(id))
        if (sameServiceIndex !== -1 && sameServiceIndex !== index) {
          const sameService = result[sameServiceIndex]
          const { price: samePrice = 0 } = sameService || {}
          result[sameServiceIndex] = { ...sameService, price: samePrice + price }
        } else {
          result.push(service)
        }
        return result
      }, [])
  }
)

/**
 * Возвращает стоимость выбранных услуг доставки.
 * @param {Object} state Текущее состояние.
 * @returns {number} Стоимость выбранных услуг доставки.
 */
export const selectSelectedServicesSum = createSelector(
  selectSelectedServices,
  selectedServices => {
    return Array.from(selectedServices).reduce((result, service) => {
      const { price = 0 } = service || {}
      return result + Number(price)
    }, 0)
  }
)

/**
 * Возвращает данные для боковой колонки.
 * @param {Object} state Текущее состояние.
 * @returns {Object} Данные для боковой колонки.
 */
export const selectOrderInfo = createStructuredSelector({
  deliverySum: selectOrderDeliverySum,
  discountsSum: selectOrderDiscountsSum,
  orderItemsSum: selectOrderItemsSum,
  servicesSum: selectSelectedServicesSum,
  shipmentsCount: selectShipmentsCount,
  costModifiers: selectCostModifiers,
})

/**
 * Возвращает итоговую стоимость заказа по текущему состоянию приложения.
 * @param {Object} state Состояние приложения.
 * @returns {number} Итоговая стоимость заказа.
 */
export const selectOrderTotalSum = createSelector(selectOrderInfo, orderInfo => {
  const {
    costModifiers = [],
    deliverySum = 0,
    discountsSum = 0,
    orderItemsSum = 0,
    servicesSum = 0,
  } = orderInfo || {}
  const costModifiersSum = sumBy(costModifiers, 'cost') || 0
  return [orderItemsSum, deliverySum, servicesSum, -discountsSum, costModifiersSum]
    .map(sum => Number(sum) || 0)
    .reduce((a, b) => a + b)
})

/**
 * Возвращает стоимость доставки самостоятельных отгрузок.
 * @param {Object} state Состояние приложения.
 * @returns {number} Стоимость доставки самостоятельных отгрузок
 */
export const selectShipmentsDeliverySum = createSelector(
  selectShipmentsForm,
  shipmentsForm => {
    const { shipments = [], deliveryTypesMap = {} } = shipmentsForm || {}
    let shipmentDeliverySum = 0
    if (Array.isArray(shipments) && deliveryTypesMap) {
      shipmentDeliverySum = shipments.reduce((result, shipment) => {
        shipment = shipment || {}
        const { id: shipmentId, deliveryTypeId } = shipment
        const selectedDeliveryType = deliveryTypesMap[`${shipmentId}-${deliveryTypeId}`]
        if (selectedDeliveryType && !isNaN(selectedDeliveryType.cost)) {
          result = result + Number(selectedDeliveryType.cost)
        }
        return result || 0
      }, 0)
    }
    return Number(shipmentDeliverySum)
  }
)

/**
 * Возвращает выбранный тип доставки по текущему состоянию приложения.
 * @param {Object} state Состояние приложения.
 * @returns {(Object|undefined)} Выбранный тип доставки.
 */
export const getSelectedDeliveryType = createSelector(selectDelivery, delivery => {
  const { selectedData = {}, deliveryTypesMap = {} } = delivery || {}
  const { deliveryTypeId } = selectedData || {}
  return get(deliveryTypesMap, deliveryTypeId)
})

/**
 * Возвращает булево значение, определяющее, можно ли сменить выбранный тип отгрузок.
 * @param {Object} state Текущее состояние.
 * @returns {Object} Булево значение, определяющее, можно ли сменить выбранный тип отгрузок.
 */
export const canChangeShipmentType = createSelector(getSelectedDeliveryType, deliveryType => {
  const { shipmentTypesIds = [] } = deliveryType || {}
  return Array.isArray(shipmentTypesIds) && shipmentTypesIds.length > 1
})

/**
 * Возвращает стоимость выбранного самостоятельного типа доставки с учетом стоимости отгрузок.
 * @param {Object} state Состояние приложения.
 * @returns {number} Стоимость доставки выбранного типа.
 */
export const getSelectedDeliveryTypeSum = createSelector(
  getSelectedDeliveryType,
  getSelectedShipments,
  (deliveryType, shipments) => {
    const { cost: typeCost = 0, shipmentTypesIds = [] } = deliveryType || {}
    let deliverySum = 0

    if (Array.isArray(shipmentTypesIds) && shipmentTypesIds.length > 0) {
      deliverySum = Array.from(shipments || []).reduce((shipmentsSum, shipment, index) => {
        const { cost: shipmentCost } = shipment || {}
        return shipmentsSum + (Number(shipmentCost) || 0)
      }, 0)
    } else if (typeCost) {
      deliverySum = typeCost
    }

    return Number(deliverySum) || 0
  }
)

/**
 * Возвращает данные, готовые для валидации или отправки заказа.
 * @param {Object} state Состояние приложения.
 * @returns {Object} Данные, готовые для валидации или отправки.
 */
export function selectReadyOrderData (state) {
  return {
    ...Selectors.selectForm(state),
    ...Selectors.getActualContacts(state),
    ...Selectors.getActualDeliveryData(state),
    comment: Selectors.getCommentFieldValue(state),
    paymentTypeId: Selectors.getSelectedPaymentTypeId(state),
  }
}

/**
 * Возвращает текущие выбранные данные доставки, готовые для отправки заказа.
 * @param {Object} state Состояние приложения.
 * @returns {Object} Данные доставки, готовые для валидации или отправки.
 */
export function getActualDeliveryData (state) {
  const { delivery = {} } = state || {}
  const { selectedData = {} } = delivery || {}
  const { deliveryTypeId } = selectedData || {}
  const shipments = Selectors.getSelectedShipments(state)
  return {
    deliveryTypeId,
    delivery_dates: Array.isArray(shipments)
      ? shipments.map(shipment => {
        const {
          type,
          stockId,
          selectedDate = {},
          selectedTimeInterval = {},
          servicesIds = [],
        } = shipment || {}
        const { date, intervals = [] } = selectedDate || {}
        const [firstInterval] = Array.from(intervals || [])
        const { from, to } = selectedTimeInterval || firstInterval || {}
        return {
          type,
          stock_id: stockId,
          initial_date: `${date} ${from || '00:00'}`,
          final_date: `${date} ${to || '00:00'}`,
          extra_services: servicesIds,
        }
      })
      : [],
  }
}

/**
 * Проверяет доступность заявки СП.
 * @param {Object} state Состояние приложения.
 * @returns {boolean} Булево значение, определяющее, доступность заявки СП.
 */
export const selectIsJpRequestAvailable = createSelector(
  selectDelivery,
  delivery => Boolean(get(delivery, 'params.is_jp_request_available'))
)

/**
 * Возвращает минимальную стоимость товаров в корзине.
 * @param {Object} state Состояние приложения.
 * @returns {number} Минимальная стоимость товаров в корзине.
 */
export const selectMinItemsSum = createSelector(
  selectCurrentSettlement,
  currentSettlement => {
    const {
      min_order_sum: minOrderSum = 0,
      jp_request_min_sum: minJpRequestSum = 0,
    } = currentSettlement || {}
    const minItemsSum = isNumeric(minJpRequestSum)
      ? Math.min(minJpRequestSum, minOrderSum)
      : minOrderSum
    return Number(minItemsSum) || 0
  }
)

/**
 * Возвращает true если можно отправить заказ с текущими данными.
 * @param {Object} state Состояние приложения.
 * @returns {boolean} Булево значение, определяющее, доступность заказа.
 */
export function selectIsOrderAvailable (state) {
  const shipments = Selectors.selectShipmentsData(state)
  const jpOrganizers = Selectors.selectJpOrganizers(state)
  const deliveryGroups = Selectors.selectEnabledDeliveryGroups(state)
  return [shipments, jpOrganizers, deliveryGroups].some(collection => collection && collection.length > 0)
}

/**
 * Возвращает true если тип заказа был переключен на "Только товары партнера" после загрузки страницы.
 * @param {Object} state Состояние приложения.
 * @returns {boolean} Истинно, если тип заказа был переключен после загрузки страницы.
 */
export const isSessionRemoteOrder = state => {
  const isInitialRemoteOrder = get(state, 'common.params.remote_order')
  return !isInitialRemoteOrder && Boolean(Selectors.selectFormIsRemoteOrder(state))
}

/**
 * Возвращает актуальный заголовок формы заказа.
 * @param {Object} state Состояние приложения.
 * @returns {string} Актуальный заголовок.
 */
export const selectFormTitle = createSelector(
  isSessionRemoteOrder,
  isSessionRemote => {
    return isSessionRemote
      ? 'Оформление заказа (только товары партнёров)'
      : 'Оформление заказа'
  }
)

/**
 * Возвращает актуальный текст кнопки возврата (над заголовком формы).
 * @param {Object} state Состояние приложения.
 * @returns {string} Актуальный текст кнопки
 */
export const selectBackButtonText = createSelector(
  isSessionRemoteOrder,
  isSessionRemote => {
    return isSessionRemote
      ? 'Вернуться к оформлению всего заказа'
      : 'Назад в корзину'
  }
)

/**
 * Возвращает список идентификаторов доступных групп доставок (тех, которые видны пользователю в виде карточек).
 * @param {Object} state Состояние приложения.
 * @returns {Array<number>} Список идентификаторов доступных групп доставок.
 */
export function getEnabledDeliveryGroupsIds (state) {
  const isJpRequestAvailable = Selectors.selectIsJpRequestAvailable(state)
  const { id: jpGroupId, state: jpInfoState, items: jpOrganizers } = Selectors.selectJpPurchase(state) || {}
  const enabledDeliveryGroups = Array.from(Selectors.selectEnabledDeliveryGroups(state) || [])
    .concat(Array.from(Selectors.getShipmentsDeliveryGroups(state)) || [])
  const enabledGroupsIds = enabledDeliveryGroups.reduce((result, group = {}) => {
    // @todo оставить isEnabled после замены в селекторе selectEnabledDeliveryGroups SL-22807
    const { id: groupId, is_enabled: isEnabled = true } = group || {}
    if (isEnabled && !result.includes(groupId)) {
      result.push(groupId)
    }
    return result
  }, [])
  if (
    isJpRequestAvailable
    && jpInfoState === DATA_STATES_TYPES.success
    && jpOrganizers
    && jpOrganizers.length > 0
  ) {
    enabledGroupsIds.push(jpGroupId)
  }
  return enabledGroupsIds
}

/**
 * Возвращает контактные данные, готовые к оформлению заказа.
 * @param {Object} state Состояние приложения.
 * @returns {Object} Готовые контактные данные.
 */
export const getActualContacts = createSelector(selectContactForm, contactForm => {
  const { contacts, legalEntity, selectedTabId } = contactForm || {}
  let readyContacts = { ...contacts }
  if (isNumeric(selectedTabId)) {
    if (selectedTabId === PERSON_TYPE.customer) {
      readyContacts.person_type = PERSON_TYPE.customer
    } else if (selectedTabId !== PERSON_TYPE.customer && legalEntity) {
      readyContacts.legalEntity = legalEntity
      readyContacts.person_type = DADATA_PARTY_TYPES_IDS[legalEntity.type] || selectedTabId
    }
  }
  return readyContacts
})

/**
 * Возвращает массив вкладок для формы контактов.
 * @param {Object} state Состояние приложения.
 * @returns {Array<Object>} Массив вкладок.
 */
export const getPersonTypeTabs = createSelector(selectContactForm, contactForm => {
  const { tabs = [], selectedTabId } = contactForm || {}
  return Array.from(tabs || []).map(tab => {
    const { id: tabId } = tab || {}
    return {
      ...tab,
      isSelected: tabId === selectedTabId,
    }
  })
})

/**
 * Определяет, нужно ли выводить поля для ввода данных юридических лиц.
 * @param {Object} state Состояние приложения.
 * @returns {boolean} Нужно ли выводить поля для ввода данных юридических лиц?
 */
export const isLegalEntityFieldsShown = createSelector(selectContactForm, contactForm => {
  const { selectedTabId } = contactForm || {}
  return isNumeric(selectedTabId) && selectedTabId !== PERSON_TYPE.customer
})

/**
 * Набор селекторов.
 * Вложенные селекторы должны браться отсюда для возможности тестирования.
 * @type {Object}
 */
const Selectors = {
  canChangeShipmentType,
  getActualContacts,
  getActualDeliveryData,
  getCleanDeliveryData,
  getContactFieldValues,
  getCommentFieldValue,
  getCommentFieldError,
  getDeliveryGroupItems,
  getDeliveryType,
  getEnabledDeliveryGroupsIds,
  getLegalEntityFieldValues,
  getPersonTypeTabs,
  getSelectedDeliveryGroup,
  getSelectedDeliveryType,
  getSelectedDeliveryTypeSum,
  getSelectedPaymentTypeId,
  getSelectedShipments,
  getSelectedShipmentsData,
  getSelectedShipmentsServices,
  getSelectedShipmentType,
  getShipmentsDeliveryGroups,
  getShipmentTypes,
  getShownDeliveryGroupItems,
  getViewedDeliveryGroupId,
  isLegalEntityFieldsShown,
  isSessionRemoteOrder,
  selectBackButtonText,
  selectCartData,
  selectCartItemsSum,
  selectContactForm,
  selectComment,
  selectCostModifiers,
  selectCurrentSettlement,
  selectCurrentSettlementId,
  selectDelivery,
  selectDeliveryGroups,
  selectDeliveryTypesServices,
  selectEnabledDeliveryGroups,
  selectForm,
  selectFormIsRemoteOrder,
  selectFormOptions,
  selectFormTitle,
  selectFormType,
  selectIsGuest,
  selectIsJpRequestAvailable,
  selectIsOrderAvailable,
  selectJpOrganizers,
  selectJpPurchase,
  selectJpRequests,
  selectMinItemsSum,
  selectOrder,
  selectOrderDeliverySum,
  selectOrderDiscountsSum,
  selectOrderInfo,
  selectOrderItemsSum,
  selectOrderTotalSum,
  selectPayment,
  selectPaymentTypes,
  selectReadyOrderData,
  selectRemoteItemPage,
  selectSelectedPaymentType,
  selectSelectedServices,
  selectSelectedServicesSum,
  selectSettlement,
  selectSettlementKladrId,
  selectShipmentsAddress,
  selectShipmentsCount,
  selectShipmentsData,
  selectShipmentsDeliverySum,
  selectShipmentsForm,
  selectTransitSettlementsIds,
  selectUser,
}

export default Selectors
