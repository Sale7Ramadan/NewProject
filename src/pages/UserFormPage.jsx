import PageHeader from '../components/PageHeader';
import FormSection from '../components/FormSection';

function UserFormPage() {
  return (
    <>
      <PageHeader title="إضافة / تعديل مستخدم" actions={<button className="primary-btn">حفظ</button>} />
      <FormSection title="بيانات المستخدم">
        <label>الاسم<input /></label>
        <label>اسم المستخدم<input /></label>
        <label>كلمة المرور<input type="password" /></label>
        <label>نوع المستخدم<select><option>مدير</option><option>موظف</option></select></label>
        <label>الحالة<select><option>نشط</option><option>موقوف</option></select></label>
      </FormSection>
    </>
  );
}

export default UserFormPage;
