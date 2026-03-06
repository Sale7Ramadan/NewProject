export const items = [
  { code: 'IT-1001', name: 'دهان بلاستيك أبيض 20L', category: 'دهانات داخلية', unit: 'علبة', buyPrice: 145, sellPrice: 220, minStock: 30, qty: 112, status: 'متوفر' },
  { code: 'IT-1002', name: 'دهان خارجي مقاوم 18L', category: 'دهانات خارجية', unit: 'علبة', buyPrice: 178, sellPrice: 260, minStock: 20, qty: 9, status: 'منخفض' },
  { code: 'IT-1003', name: 'معجون جدران 25KG', category: 'مستلزمات', unit: 'كيس', buyPrice: 31, sellPrice: 48, minStock: 35, qty: 0, status: 'نافد' },
];

export const itemMovements = [
  { ref: 'INV-S-902', date: '2026-03-08', item: 'IT-1001', action: 'صرف بيع', qty: 7, user: 'مشرف المبيعات', status: 'مؤكد' },
  { ref: 'INV-P-211', date: '2026-03-08', item: 'IT-1002', action: 'إضافة شراء', qty: 15, user: 'موظف المشتريات', status: 'مؤكد' },
  { ref: 'OB-011', date: '2026-03-01', item: 'IT-1003', action: 'رصيد افتتاحي', qty: 20, user: 'المدير', status: 'ملغي' },
];
