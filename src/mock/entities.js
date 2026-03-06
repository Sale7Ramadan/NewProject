export const products = [
  { code: 'PR-101', name: 'دهان أبيض مطفي 20L', category: 'دهانات داخلية', unit: 'علبة', minStock: 40, status: 'متاح' },
  { code: 'PR-102', name: 'برايمر داخلي 4L', category: 'مواد تأسيس', unit: 'جالون', minStock: 30, status: 'متاح' },
  { code: 'PR-103', name: 'دهان خارجي مقاوم 18L', category: 'دهانات خارجية', unit: 'علبة', minStock: 25, status: 'منخفض' },
];

export const warehouses = [
  { code: 'WH-01', name: 'المستودع الرئيسي', city: 'الرياض', manager: 'أحمد خالد', utilization: '78%' },
  { code: 'WH-02', name: 'مستودع المنطقة الشرقية', city: 'الدمام', manager: 'سامي الزهراني', utilization: '64%' },
  { code: 'WH-03', name: 'مستودع الجنوب', city: 'أبها', manager: 'نواف عسيري', utilization: '58%' },
];

export const stockPerWarehouse = [
  { warehouse: 'المستودع الرئيسي', product: 'دهان أبيض مطفي 20L', available: 165, reserved: 20, status: 'جيد' },
  { warehouse: 'مستودع المنطقة الشرقية', product: 'دهان خارجي مقاوم 18L', available: 19, reserved: 5, status: 'منخفض' },
  { warehouse: 'مستودع الجنوب', product: 'برايمر داخلي 4L', available: 77, reserved: 10, status: 'جيد' },
];

export const movements = [
  { no: 'MV-0012', date: '2026-03-06', type: 'صرف', ref: 'INV-883', warehouse: 'المستودع الرئيسي', status: 'مؤكد' },
  { no: 'MV-0013', date: '2026-03-06', type: 'إضافة', ref: 'PO-221', warehouse: 'مستودع المنطقة الشرقية', status: 'قيد المراجعة' },
  { no: 'MV-0014', date: '2026-03-05', type: 'تحويل', ref: 'TR-009', warehouse: 'المستودع الرئيسي', status: 'مؤكد' },
];

export const transfers = [
  { no: 'TR-009', from: 'المستودع الرئيسي', to: 'مستودع الجنوب', item: 'معجون جدران 25KG', qty: 20, status: 'تم الاستلام' },
  { no: 'TR-010', from: 'مستودع المنطقة الشرقية', to: 'المستودع الرئيسي', item: 'دهان أبيض مطفي 20L', qty: 15, status: 'قيد النقل' },
];

export const countSheets = [
  { no: 'CNT-102', warehouse: 'المستودع الرئيسي', date: '2026-03-01', variance: '-2', status: 'مغلق' },
  { no: 'CNT-103', warehouse: 'مستودع الجنوب', date: '2026-03-04', variance: '+7', status: 'قيد التنفيذ' },
];

export const partners = [
  { code: 'CU-301', name: 'شركة ألوان البناء', type: 'عميل', phone: '0550000001', balance: '24,500 ر.س' },
  { code: 'SU-106', name: 'مصنع الخليج للكيماويات', type: 'مورد', phone: '0550000002', balance: '89,200 ر.س' },
  { code: 'CU-305', name: 'مؤسسة لمسة ديكور', type: 'عميل', phone: '0550000003', balance: '13,750 ر.س' },
];

export const invoice = {
  no: 'INV-883',
  date: '2026-03-06',
  customer: 'شركة ألوان البناء',
  salesRep: 'محمد علي',
  items: [
    { name: 'دهان أبيض مطفي 20L', qty: 10, price: 220 },
    { name: 'برايمر داخلي 4L', qty: 6, price: 85 },
    { name: 'معجون جدران 25KG', qty: 8, price: 48 },
  ],
};
