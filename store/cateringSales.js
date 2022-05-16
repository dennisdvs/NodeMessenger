export const state = () => ({
  isEdit: false,
  cateringOrder: {
    id: '',
    description: '',
    items: [],
    deliveryDate: '',
    headCount: '',
    phoneNumber: '',
    orderBy: '',
    orderFor: '',
    orderDate: '',
    isTaxable: false,
    tax: '',
    shipToName: '',
    shipToAddress: '',
    billToName: '',
    billToAddress: '',
    isCashOrder: false,
    chargeNumber: '',
  },
})

export const mutations = {
  SET_CATERING_ORDER(state, payload) {
    state.cateringOrder = payload
  },
  SET_IS_EDIT(state, payload) {
    state.isEdit = payload
  },
  SET_ID(state, payload) {
    state.cateringOrder.id = payload
  },
  SET_DESCRIPTION(state, payload) {
    state.cateringOrder.description = payload
  },
  SET_ITEMS(state, payload) {
    state.cateringOrder.items = [...state.cateringOrder.items, payload]
  },
  SET_DELIVERY_DATE(state, payload) {
    state.cateringOrder.deliveryDate = payload
  },
  SET_HEAD_COUNT(state, payload) {
    state.cateringOrder.headCount = payload
  },
  SET_PHONE_NUMBER(state, payload) {
    state.cateringOrder.phoneNumber = payload
  },
  SET_ORDER_BY(state, payload) {
    state.cateringOrder.orderBy = payload
  },
  SET_ORDER_FOR(state, payload) {
    state.cateringOrder.orderFor = payload
  },
  SET_ORDER_DATE(state, payload) {
    state.cateringOrder.orderDate = payload
  },
  SET_IS_TAXABLE(state, payload) {
    state.cateringOrder.isTaxable = payload
  },
  SET_TAX(state, payload) {
    state.cateringOrder.tax = payload
  },
  SET_SHIP_TO_NAME(state, payload) {
    state.cateringOrder.shipToName = payload
  },
  SET_SHIP_TO_ADDRESS(state, payload) {
    state.cateringOrder.shipToAddress = payload
  },
  SET_BILL_TO_NAME(state, payload) {
    state.cateringOrder.billToName = payload
  },
  SET_BILL_TO_ADDRESS(state, payload) {
    state.cateringOrder.billToAddress = payload
  },
  SET_IS_CASH_ORDER(state, payload) {
    state.cateringOrder.isCashOrder = payload
  },
  SET_CHARGE_NUMBER(state, payload) {
    state.cateringOrder.chargeNumber = payload
  },
}

export const getters = {
  getId: (state) => state.cateringOrder.id,
  getDescription: (state) => state.cateringOrder.description,
  getItems: (state) => state.cateringOrder.items,
  getDeliveryDate: (state) => state.cateringOrder.deliveryDate,
  getHeadCount: (state) => state.cateringOrder.headCount,
  getPhoneNumber: (state) => state.cateringOrder.phoneNumber,
  getOrderBy: (state) => state.cateringOrder.orderBy,
  getOrderFor: (state) => state.cateringOrder.orderFor,
  getOrderDate: (state) => state.cateringOrder.orderDate,
  getIsTaxable: (state) => state.cateringOrder.isTaxable,
  getTax: (state) => state.cateringOrder.tax,
  getShipToName: (state) => state.cateringOrder.shipToName,
  getShipToAddress: (state) => state.cateringOrder.shipToAddress,
  getBillToName: (state) => state.cateringOrder.billToName,
  getBillToAddress: (state) => state.cateringOrder.billToAddress,
  getIsCashOrder: (state) => state.cateringOrder.isCashOrder,
  getChargeNumber: (state) => state.cateringOrder.chargeNumber,
  getIsEdit: (state) => state.isEdit,
}
