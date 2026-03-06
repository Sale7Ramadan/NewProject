import PageHeader from '../components/PageHeader';
import FormSection from '../components/FormSection';

function CustomerFormPage() {
  return (
    <>
      <PageHeader title="إضافة / تعديل عميل" actions={<button className="primary-btn">حفظ</button>} />
      <FormSection title="بيانات العميل">
        <label>اسم العميل<input /></label>
        <label>الهاتف<input /></label>
        <label>العنوان<input /></label>
        <label>سقف ائتماني<input placeholder="0" /></label>
        <label>ملاحظات<textarea rows="4" /></label>
      </FormSection>
    </>
  );
}

export default CustomerFormPage;
