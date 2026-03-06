import PageHeader from '../components/PageHeader';
import FormSection from '../components/FormSection';
import TabsSection from '../components/TabsSection';

function ItemFormPage() {
  const field = (label, placeholder) => <label>{label}<input placeholder={placeholder} /></label>;

  const tabs = [
    { id: 'basic', label: 'البيانات الأساسية', content: <FormSection title="تعريف الصنف">{field('كود الصنف', 'IT-1004')}{field('اسم الصنف', 'دهان اقتصادي 15L')}{field('التصنيف', 'دهانات داخلية')}{field('الوحدة', 'علبة')}</FormSection> },
    { id: 'pricing', label: 'التسعير', content: <FormSection title="سياسات التسعير">{field('سعر الشراء', '120')}{field('سعر البيع', '180')}{field('ضريبة', '15%')}{field('خصم افتراضي', '0')}</FormSection> },
    { id: 'stock', label: 'المخزون', content: <FormSection title="إعدادات المخزون">{field('الحد الأدنى', '25')}{field('الحد الأعلى', '400')}{field('موقع التخزين', 'الرف A-2')}</FormSection> },
    { id: 'notes', label: 'ملاحظات', content: <FormSection title="ملاحظات إضافية"><label>ملاحظات<textarea rows="5" placeholder="أي ملاحظات داخلية..." /></label></FormSection> },
  ];

  return (
    <>
      <PageHeader title="إضافة / تعديل صنف" breadcrumbs={['الأصناف', 'النموذج']} actions={<button className="primary-btn">حفظ</button>} />
      <TabsSection tabs={tabs} />
    </>
  );
}

export default ItemFormPage;
