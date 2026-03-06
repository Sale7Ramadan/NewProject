import PageHeader from '../components/PageHeader';
import DataTable from '../components/DataTable';
import { purchaseInvoices } from '../data/invoices';

function PurchaseInvoicesPage() {
  const columns = [
    { key: 'no', label: 'رقم الفاتورة' },
    { key: 'date', label: 'التاريخ' },
    { key: 'partner', label: 'المورد' },
    { key: 'user', label: 'المدخل' },
    { key: 'total', label: 'الإجمالي' },
    { key: 'status', label: 'الحالة', type: 'status' },
  ];

  return (
    <>
      <PageHeader title="قائمة فواتير الشراء" actions={<button className="primary-btn">إنشاء فاتورة شراء</button>} />
      <DataTable columns={columns} rows={purchaseInvoices} />
    </>
  );
}

export default PurchaseInvoicesPage;
