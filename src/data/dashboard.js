export const dashboardStats = [
  { label: 'عدد الأصناف', value: 328, hint: '+12 هذا الأسبوع', tone: 'info' },
  { label: 'عدد العملاء', value: 91, hint: '+4 عميل جديد', tone: 'success' },
  { label: 'عدد الموردين', value: 27, hint: '3 موردين نشطين اليوم', tone: 'neutral' },
  { label: 'إجمالي المبيعات', value: '186,420 ر.س', hint: '+8.4%', tone: 'success' },
  { label: 'إجمالي المشتريات', value: '132,900 ر.س', hint: '+3.1%', tone: 'info' },
  { label: 'أصناف منخفضة', value: 14, hint: 'تحتاج إعادة طلب', tone: 'warning' },
];

export const movementTimeline = [
  { no: 'MOV-3021', date: '2026-03-08', item: 'دهان أبيض مطفي 20L', type: 'بيع', qty: 7, status: 'مؤكد' },
  { no: 'MOV-3020', date: '2026-03-08', item: 'برايمر داخلي 4L', type: 'شراء', qty: 15, status: 'قيد المراجعة' },
  { no: 'MOV-3019', date: '2026-03-07', item: 'فرشاة احترافية', type: 'تسوية', qty: 4, status: 'مؤكد' },
];

export const miniCharts = {
  weeklySales: [30, 42, 55, 47, 61, 58, 73],
  weeklyPurchases: [22, 35, 29, 31, 44, 40, 51],
};
