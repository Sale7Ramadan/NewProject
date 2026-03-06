export const navSections = [
  {
    title: 'الإدارة الرئيسية',
    links: [
      { to: '/', label: 'لوحة التحكم' },
      { to: '/items', label: 'قائمة الأصناف' },
      { to: '/stock', label: 'المخزون الحالي' },
      { to: '/item-movement', label: 'حركة صنف' },
      { to: '/opening-balance', label: 'الرصيد الافتتاحي' },
    ],
  },
  {
    title: 'المشتريات والمبيعات',
    links: [
      { to: '/purchase-invoices', label: 'فواتير الشراء' },
      { to: '/sales-invoices', label: 'فواتير البيع' },
      { to: '/suppliers', label: 'الموردون' },
      { to: '/customers', label: 'العملاء' },
    ],
  },
  {
    title: 'إعدادات وتقارير',
    links: [
      { to: '/reports', label: 'التقارير الأساسية' },
      { to: '/users', label: 'المستخدمون' },
    ],
  },
];
