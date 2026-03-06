import PageHeader from '../components/PageHeader';
import DataTable from '../components/DataTable';
import TabsSection from '../components/TabsSection';
import { itemMovements, items } from '../data/items';

function ItemMovementPage() {
  const movementColumns = [
    { key: 'ref', label: 'مرجع الحركة' },
    { key: 'date', label: 'التاريخ' },
    { key: 'action', label: 'نوع الحركة' },
    { key: 'qty', label: 'الكمية' },
    { key: 'user', label: 'المستخدم' },
    { key: 'status', label: 'الحالة', type: 'status' },
  ];

  const stockColumns = [
    { key: 'code', label: 'الكود' },
    { key: 'name', label: 'الصنف' },
    { key: 'qty', label: 'الرصيد الحالي' },
    { key: 'status', label: 'الحالة', type: 'status' },
  ];

  const tabs = [
    { id: 'overview', label: 'نظرة عامة', content: <p className="hint-card">اختر صنفًا لمراجعة حركة الصرف والإضافة مع التحقق من الرصيد.</p> },
    { id: 'movement', label: 'حركة الصنف', content: <DataTable columns={movementColumns} rows={itemMovements} /> },
    { id: 'balance', label: 'الرصيد الحالي', content: <DataTable columns={stockColumns} rows={items} /> },
  ];

  return (
    <>
      <PageHeader title="حركة صنف" subtitle="تفاصيل الحركة والرصيد بشكل مبسط" />
      <TabsSection tabs={tabs} />
    </>
  );
}

export default ItemMovementPage;
