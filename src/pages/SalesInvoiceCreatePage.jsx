import PageHeader from '../components/PageHeader';
import FormSection from '../components/FormSection';

function SalesInvoiceCreatePage() {
  return (
    <>
      <PageHeader title="إنشاء فاتورة بيع" actions={<button className="primary-btn">حفظ الفاتورة</button>} />
      <FormSection title="بيانات الفاتورة">
        <label>رقم الفاتورة<input defaultValue="INV-S-903" /></label>
        <label>العميل<select><option>شركة بيت الألوان</option></select></label>
        <label>التاريخ<input type="date" /></label>
        <label>المستخدم<input defaultValue="موظف المبيعات" /></label>
      </FormSection>
      <FormSection title="الأصناف داخل الفاتورة">
        <label>الصنف<select><option>دهان بلاستيك أبيض 20L</option></select></label>
        <label>الكمية<input defaultValue="4" /></label>
        <label>السعر<input defaultValue="220" /></label>
        <label>التحقق من الكمية<input defaultValue="متوفر 112" readOnly /></label>
        <label>ملاحظات<textarea rows="3" placeholder="ملاحظات البيع" /></label>
      </FormSection>
    </>
  );
}

export default SalesInvoiceCreatePage;
