import DataTable from '../components/DataTable';
import FilterBar from '../components/FilterBar';
import PageHeader from '../components/PageHeader';
import { warehouses } from '../mock/entities';

function WarehousesPage() {
  const columns = [
    { key: 'code', label: 'الكود' },
    { key: 'name', label: 'اسم المستودع' },
    { key: 'city', label: 'المدينة' },
    { key: 'manager', label: 'المسؤول' },
    { key: 'utilization', label: 'نسبة الإشغال' },
  ];

  return (
    <>
      <PageHeader title="المستودعات" description="عرض بيانات المستودعات ومعدلات الاستغلال." actions={<button>إضافة مستودع</button>} />
      <FilterBar />
      <DataTable columns={columns} rows={warehouses} />
    </>
  );
}

export default WarehousesPage;
