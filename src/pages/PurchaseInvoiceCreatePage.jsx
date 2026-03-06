import PageHeader from '../components/PageHeader';
import FormSection from '../components/FormSection';

function PurchaseInvoiceCreatePage() {
  return (
    <>
      <PageHeader title="إنشاء فاتورة شراء" actions={<button className="primary-btn">حفظ الفاتورة</button>} />
      <FormSection title="بيانات الفاتورة">
        <label>رقم الفاتورة<input defaultValue="INV-P-212" /></label>
        <label>المورد<select><option>مصنع الخليج للدهانات</option></select></label>
        <label>التاريخ<input type="date" /></label>
        <label>المستخدم<input defaultValue="موظف المشتريات" /></label>
      </FormSection>
      <FormSection title="الأصناف داخل الفاتورة">
        <label>الصنف<select><option>دهان بلاستيك أبيض 20L</option></select></label>
        <label>الكمية<input defaultValue="12" /></label>
        <label>سعر الشراء<input defaultValue="145" /></label>
        <label>الإجمالي<input defaultValue="1740" /></label>
        <label>ملاحظات<textarea rows="3" /></label>
      </FormSection>
    </>
  );
}

export default PurchaseInvoiceCreatePage;
