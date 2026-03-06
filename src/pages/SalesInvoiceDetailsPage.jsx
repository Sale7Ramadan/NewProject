import PageHeader from '../components/PageHeader';
import TabsSection from '../components/TabsSection';
import DataTable from '../components/DataTable';
import { invoiceLines } from '../data/invoices';

function SalesInvoiceDetailsPage() {
  const columns = [
    { key: 'item', label: 'الصنف' },
    { key: 'qty', label: 'الكمية' },
    { key: 'price', label: 'السعر' },
    { key: 'total', label: 'الإجمالي' },
  ];

  return (
    <>
      <PageHeader title="تفاصيل فاتورة بيع" subtitle="INV-S-902" />
      <TabsSection
        tabs={[
          { id: 'invoice', label: 'بيانات الفاتورة', content: <p className="hint-card">العميل: شركة بيت الألوان | الحالة: معتمد</p> },
          { id: 'items', label: 'الأصناف', content: <DataTable columns={columns} rows={invoiceLines} /> },
          { id: 'notes', label: 'الملاحظات', content: <p className="hint-card">تم التحقق شكليًا من الكميات قبل الحفظ.</p> },
        ]}
      />
    </>
  );
}

export default SalesInvoiceDetailsPage;
