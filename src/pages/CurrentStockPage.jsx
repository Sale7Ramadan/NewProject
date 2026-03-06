import PageHeader from '../components/PageHeader';
import DataTable from '../components/DataTable';
import { items } from '../data/items';

function CurrentStockPage() {
  const columns = [
    { key: 'code', label: 'الكود' },
    { key: 'name', label: 'الصنف' },
    { key: 'qty', label: 'الكمية الحالية' },
    { key: 'minStock', label: 'الحد الأدنى' },
    { key: 'status', label: 'حالة المخزون', type: 'status' },
  ];

  return (
    <>
      <PageHeader title="المخزون الحالي" subtitle="عرض سريع للكميات والتنبيهات" />
      <DataTable columns={columns} rows={items} />
    </>
  );
}

export default CurrentStockPage;
