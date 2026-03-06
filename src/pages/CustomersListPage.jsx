import PageHeader from '../components/PageHeader';
import DataTable from '../components/DataTable';
import { customers } from '../data/partners';

function CustomersListPage() {
  const columns = [
    { key: 'code', label: 'الكود' },
    { key: 'name', label: 'الاسم' },
    { key: 'phone', label: 'الهاتف' },
    { key: 'address', label: 'العنوان' },
    { key: 'notes', label: 'ملاحظات' },
    { key: 'status', label: 'الحالة', type: 'status' },
  ];

  return (
    <>
      <PageHeader title="قائمة العملاء" actions={<button className="primary-btn">إضافة عميل</button>} />
      <DataTable columns={columns} rows={customers} />
    </>
  );
}

export default CustomersListPage;
