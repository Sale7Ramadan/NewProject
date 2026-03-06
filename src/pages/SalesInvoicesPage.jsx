import PageHeader from '../components/PageHeader';
import DataTable from '../components/DataTable';
import { salesInvoices } from '../data/invoices';

function SalesInvoicesPage() {
  const columns = [
    { key: 'no', label: 'رقم الفاتورة' },
    { key: 'date', label: 'التاريخ' },
    { key: 'partner', label: 'العميل' },
    { key: 'user', label: 'المدخل' },
    { key: 'total', label: 'الإجمالي' },
    { key: 'status', label: 'الحالة', type: 'status' },
  ];

  return (
    <>
      <PageHeader title="قائمة فواتير البيع" actions={<button className="primary-btn">إنشاء فاتورة بيع</button>} />
      <DataTable columns={columns} rows={salesInvoices} />
    </>
  );
}

export default SalesInvoicesPage;
