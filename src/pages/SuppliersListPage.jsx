import PageHeader from '../components/PageHeader';
import DataTable from '../components/DataTable';
import { suppliers } from '../data/partners';

function SuppliersListPage() {
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
      <PageHeader title="قائمة الموردين" actions={<button className="primary-btn">إضافة مورد</button>} />
      <DataTable columns={columns} rows={suppliers} />
    </>
  );
}

export default SuppliersListPage;
