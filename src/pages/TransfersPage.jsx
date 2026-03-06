import DataTable from '../components/DataTable';
import FilterBar from '../components/FilterBar';
import PageHeader from '../components/PageHeader';
import { transfers } from '../mock/entities';

function TransfersPage() {
  const columns = [
    { key: 'no', label: 'رقم التحويل' },
    { key: 'from', label: 'من مستودع' },
    { key: 'to', label: 'إلى مستودع' },
    { key: 'item', label: 'الصنف' },
    { key: 'qty', label: 'الكمية' },
    { key: 'status', label: 'الحالة', type: 'status' },
  ];

  return (
    <>
      <PageHeader title="تحويلات المستودعات" description="إدارة أوامر النقل بين المستودعات." actions={<button>تحويل جديد</button>} />
      <FilterBar />
      <DataTable columns={columns} rows={transfers} />
    </>
  );
}

export default TransfersPage;
