import PageHeader from '../components/PageHeader';
import FormSection from '../components/FormSection';

function OpeningBalancePage() {
  return (
    <>
      <PageHeader title="إدخال رصيد افتتاحي" subtitle="إعداد الكميات الافتتاحية قبل بدء العمليات اليومية" actions={<button className="primary-btn">حفظ السند</button>} />
      <FormSection title="بيانات السند">
        <label>رقم السند<input defaultValue="OB-012" /></label>
        <label>التاريخ<input type="date" /></label>
        <label>الصنف<select><option>دهان بلاستيك أبيض 20L</option></select></label>
        <label>الكمية<input defaultValue="50" /></label>
        <label>ملاحظات<textarea rows="4" placeholder="سبب الإدخال" /></label>
      </FormSection>
    </>
  );
}

export default OpeningBalancePage;
