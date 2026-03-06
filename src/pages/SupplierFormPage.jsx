import PageHeader from '../components/PageHeader';
import FormSection from '../components/FormSection';

function SupplierFormPage() {
  return (
    <>
      <PageHeader title="إضافة / تعديل مورد" actions={<button className="primary-btn">حفظ</button>} />
      <FormSection title="بيانات المورد">
        <label>اسم المورد<input placeholder="اسم المورد" /></label>
        <label>الهاتف<input placeholder="05xxxxxxxx" /></label>
        <label>العنوان<input placeholder="المدينة - الحي" /></label>
        <label>الحالة<select><option>نشط</option><option>غير نشط</option></select></label>
        <label>ملاحظات<textarea rows="4" /></label>
      </FormSection>
    </>
  );
}

export default SupplierFormPage;
