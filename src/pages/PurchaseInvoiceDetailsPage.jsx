import PageHeader from '../components/PageHeader';
import TabsSection from '../components/TabsSection';
import DataTable from '../components/DataTable';
import { invoiceLines } from '../data/invoices';

function PurchaseInvoiceDetailsPage() {
  const lineColumns = [
    { key: 'item', label: 'الصنف' },
    { key: 'qty', label: 'الكمية' },
    { key: 'price', label: 'سعر الشراء' },
    { key: 'total', label: 'الإجمالي' },
  ];

  return (
    <>
      <PageHeader title="تفاصيل فاتورة شراء" subtitle="INV-P-211" />
      <TabsSection
        tabs={[
          { id: 'meta', label: 'بيانات الفاتورة', content: <p className="hint-card">المورد: مصنع الخليج للدهانات | المدخل: موظف المشتريات</p> },
          { id: 'lines', label: 'الأصناف', content: <DataTable columns={lineColumns} rows={invoiceLines} /> },
          { id: 'notes', label: 'الملاحظات', content: <p className="hint-card">تمت مراجعة الأسعار وربط الفاتورة بالمستودع الرئيسي.</p> },
        ]}
      />
    </>
  );
}

export default PurchaseInvoiceDetailsPage;
