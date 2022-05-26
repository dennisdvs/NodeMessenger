import { mapGetters } from 'vuex'
import { CLOSE_REGISTER } from '~/constants/closeRegister'

export const closeRegisterMixin = {
  computed: {
    ...mapGetters({
      getId: 'closeRegister/getId',
      getRegister: 'closeRegister/getRegister',
      getItems: 'closeRegister/getItems',
      getUnit: 'closeRegister/getUnit',
      getNonResetable: 'closeRegister/getNonResetable',
      getNetTotal: 'closeRegister/getNetTotal',
      getLastNonResetable: 'closeRegister/getLastNonResetable',
      getNetOV: 'closeRegister/getNetOV',
      getTotalToDistribute: 'closeRegister/getTotalToDistribute',
      getNetCharge: 'closeRegister/getNetCharge',
      getTaxFromTheTape: 'closeRegister/getTaxFromTheTape',
      getNetVoucher: 'closeRegister/getNetVoucher',
      getOverringVoidTax: 'closeRegister/getOverringVoidTax',
      getNetCash: 'closeRegister/getNetCash',
      getChargeTax: 'closeRegister/getChargeTax',
      getVoucherTax: 'closeRegister/getVoucherTax',
      getCashTax: 'closeRegister/getCashTax',
      getTotalPettyCash: 'closeRegister/getTotalPettyCash',
      getActualCashDeposit: 'closeRegister/getActualCashDeposit',
      getCalculatedCashDeposit: 'closeRegister/getCalculatedCashDeposit',
      getOverShort: 'closeRegister/getOverShort',
      getCustomerCountBreakfast: 'closeRegister/getCustomerCountBreakfast',
      getNetSalesBreakfast: 'closeRegister/getNetSalesBreakfast',
      getCustomerCountLunch: 'closeRegister/getCustomerCountLunch',
      getNetSalesLunch: 'closeRegister/getNetSalesLunch',
      getCustomerCountDinner: 'closeRegister/getCustomerCountDinner',
      getNetSalesDinner: 'closeRegister/getNetSalesDinner',
      getCustomerCountTotals: 'closeRegister/getCustomerCountTotals',
      getNetSalesTotals: 'closeRegister/getNetSalesTotals',
      getCloseDate: 'closeRegister/getCloseDate',
      getPeriodEnd: 'closeRegister/getPeriodEnd',
      getIsEdit: 'closeRegister/getIsEdit',
      getDeleteItemIDs: 'closeRegister/getDeleteItemIDs',
      getItemsWithoutId: 'closeRegister/getItemsWithoutId',
    }),
  },
  methods: {
    cancelEdit() {
      this.$router.push('/review/register-closeout')
    },
    cancelCreate() {
      this.$store.commit('closeRegister/SET_CLOSE_REGISTER', CLOSE_REGISTER)
    },
  },
}
