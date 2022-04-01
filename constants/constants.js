export const HEADER_TABS = [
  {
    id: 1,
    name: 'Home',
    src: require('assets/images/icons/header/home.svg'),
    to: '/home',
  },
  {
    id: 2,
    name: 'Review',
    src: require('assets/images/icons/header/portfolio.svg'),
    to: '/review',
  },
  {
    id: 3,
    name: 'Reports',
    src: require('assets/images/icons/header/graph-line.svg'),
    to: '/reports',
  },
  {
    id: 4,
    name: 'Admin',
    src: require('assets/images/icons/header/person-circle.svg'),
    to: '/admin',
  },
]

export const HQ_HEADER_TABS = [
  {
    id: 1,
    name: 'Maintenance',
    src: require('assets/images/icons/hqHeader/maintenance.svg'),
    to: '/hq-maintenance',
  },
  {
    id: 2,
    name: 'Units',
    src: require('assets/images/icons/hqHeader/units.svg'),
    to: '/hq-units',
  },
  {
    id: 3,
    name: 'Reports',
    src: require('assets/images/icons/hqHeader/reports.svg'),
    to: '/hq-reports',
  },
  {
    id: 3,
    name: 'Accounting',
    src: require('assets/images/icons/hqHeader/accounting.svg'),
    to: '/hq-accounting',
  },
]

export const HOME_NAV_TABS = [
  {
    id: 1,
    caption: 'Select Unit',
    pageUrl: '/home/select-unit',
    iconSrc: require('assets/images/icons/home/cube.svg'),
  },
  {
    id: 2,
    caption: 'Close Register',
    pageUrl: '/home/close-register',
    iconSrc: require('assets/images/icons/home/window-close.svg'),
  },
  {
    id: 3,
    caption: 'Catering Sales',
    pageUrl: '/home/catering-sales',
    iconSrc: require('assets/images/icons/home/room_service.svg'),
  },
  {
    id: 4,
    caption: 'Purchase Orders',
    pageUrl: '/home/purchase-orders',
    iconSrc: require('assets/images/icons/home/order.svg'),
  },
  {
    id: 5,
    caption: 'Inventory',
    pageUrl: '/home/inventory',
    iconSrc: require('assets/images/icons/home/inventory.svg'),
  },
  {
    id: 6,
    caption: 'Expenses',
    pageUrl: '/home/expenses',
    iconSrc: require('assets/images/icons/home/account_balance_wallet.svg'),
  },
  {
    id: 7,
    caption: 'Receipts',
    pageUrl: '/home/receipts',
    iconSrc: require('assets/images/icons/home/receipt_long.svg'),
  },
  {
    id: 8,
    caption: 'On-Call Labor',
    pageUrl: '/home/on-call-labor',
    iconSrc: require('assets/images/icons/home/on-call.svg'),
  },
  {
    id: 9,
    caption: 'Accruals',
    pageUrl: '/home/accruals',
    iconSrc: require('assets/images/icons/home/chart-line.svg'),
  },
  {
    id: 10,
    caption: 'ReAccruals',
    pageUrl: '/home/reaccruals',
    iconSrc: require('assets/images/icons/home/chart-line.svg'),
  },
]

export const ADMIN_NAV_TABS = [
  {
    id: 1,
    caption: 'Fixed Expenses',
    pageUrl: '/admin/fixed-expenses',
    iconSrc: require('assets/images/icons/admin/account_balance_wallet.svg'),
  },
  {
    id: 2,
    caption: 'Close week',
    pageUrl: '/admin/close-week',
    iconSrc: require('assets/images/icons/admin/date.svg'),
  },
]

export const REVIEW_NAV_TABS = [
  {
    id: 1,
    caption: 'Register Closeout',
    pageUrl: '/review/register-closeout',
    iconSrc: require('assets/images/icons/review/period.svg'),
  },
  {
    id: 2,
    caption: 'Catering Sales',
    pageUrl: '/review/catering-sales',
    iconSrc: require('assets/images/icons/review/period.svg'),
  },
  {
    id: 3,
    caption: 'Weekly Purchases',
    pageUrl: '/review/weekly-purchases',
    iconSrc: require('assets/images/icons/review/period.svg'),
  },
  {
    id: 4,
    caption: 'Weekly Expenses',
    pageUrl: '/review/weekly-expenses',
    iconSrc: require('assets/images/icons/review/period.svg'),
  },
]

export const HQ_MAINTENANCE_TABS = [
  {
    id: 1,
    caption: 'Export Purchases',
    pageUrl: 'hq-maintenance/export-purchases',
    iconSrc: require('assets/images/icons/hqIcons/export-purchases.svg'),
  },
  {
    id: 2,
    caption: 'Export Catering',
    pageUrl: 'hq-maintenance/export-catering',
    iconSrc: require('assets/images/icons/hqIcons/default.svg'),
  },
]

export const HQ_UNITS_TABS = [
  {
    id: 1,
    caption: 'Units',
    pageUrl: 'hq-units/units',
    iconSrc: require('assets/images/icons/hqIcons/export-purchases.svg'),
  },
  {
    id: 2,
    caption: 'Unit Type',
    pageUrl: 'hq-units/unit-type',
    iconSrc: require('assets/images/icons/hqIcons/default.svg'),
  },
  {
    id: 3,
    caption: 'Registers',
    pageUrl: 'hq-units/registers',
    iconSrc: require('assets/images/icons/hqIcons/default.svg'),
  },
  {
    id: 4,
    caption: 'Unit Vendor',
    pageUrl: 'hq-units/unit-vendor',
    iconSrc: require('assets/images/icons/hqIcons/default.svg'),
  },
  {
    id: 5,
    caption: 'Unit GL',
    pageUrl: 'hq-units/unit-gl',
    iconSrc: require('assets/images/icons/hqIcons/default.svg'),
  },
  {
    id: 6,
    caption: 'Employee',
    pageUrl: 'hq-units/employee',
    iconSrc: require('assets/images/icons/hqIcons/default.svg'),
  },
  {
    id: 7,
    caption: 'Unit Period Status',
    pageUrl: 'hq-units/unit-period-status',
    iconSrc: require('assets/images/icons/hqIcons/default.svg'),
  },
]

export const HQ_ACCOUNTING = [
  {
    id: 1,
    caption: 'State',
    pageUrl: 'hq-accounting/state',
    iconSrc: require('assets/images/icons/hqIcons/export-purchases.svg'),
  },
  {
    id: 2,
    caption: 'County',
    pageUrl: 'hq-accounting/county',
    iconSrc: require('assets/images/icons/hqIcons/default.svg'),
  },
  {
    id: 3,
    caption: 'City',
    pageUrl: 'hq-accounting/city',
    iconSrc: require('assets/images/icons/hqIcons/default.svg'),
  },
  {
    id: 4,
    caption: 'District',
    pageUrl: 'hq-accounting/district',
    iconSrc: require('assets/images/icons/hqIcons/default.svg'),
  },
  {
    id: 5,
    caption: 'Vendor',
    pageUrl: 'hq-accounting/vendor',
    iconSrc: require('assets/images/icons/hqIcons/default.svg'),
  },
  {
    id: 6,
    caption: 'Sysco',
    pageUrl: 'hq-accounting/sysco',
    iconSrc: require('assets/images/icons/hqIcons/default.svg'),
  },
]
