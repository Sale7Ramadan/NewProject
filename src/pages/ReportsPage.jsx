import PageHeader from '../components/PageHeader';
import TabsSection from '../components/TabsSection';
import DataTable from '../components/DataTable';
import EmptyState from '../components/EmptyState';
import { LoadingBlock, ErrorBlock } from '../components/StateBlocks';
import { lowStock, topSelling } from '../data/reports';
import useMockState from '../hooks/useMockState';

function ReportsPage() {
  const mock = useMockState('ready');

  const lowStockColumns = [
    { key: 'code', label: 'الكود' },
    { key: 'name', label: 'الصنف' },
    { key: 'qty', label: 'الكمية' },
    { key: 'min', label: 'الحد الأدنى' },
    { key: 'status', label: 'الحالة', type: 'status' },
  ];

  const topColumns = [
    { key: 'rank', label: '#' },
    { key: 'item', label: 'الصنف' },
    { key: 'sold', label: 'المباع' },
  ];

  return (
    <>
      <PageHeader title="التقارير الأساسية" subtitle="تقارير مخزون ومبيعات ومشتريات وحركة أصناف" />
      {mock.isLoading && <LoadingBlock />}
      {mock.isError && <ErrorBlock />}
      <TabsSection
        tabs={[
          { id: 'stock', label: 'المخزون', content: <DataTable columns={lowStockColumns} rows={lowStock} /> },
          { id: 'sales', label: 'المبيعات', content: <DataTable columns={topColumns} rows={topSelling} /> },
          { id: 'purchases', label: 'المشتريات', content: <EmptyState title="لا توجد بيانات مشتريات للفترة" message="اختر فترة زمنية ثم أعد المحاولة." actionText="تحديد فترة" /> },
          { id: 'movement', label: 'حركة الأصناف', content: <p className="hint-card">عرض حركة الصنف خلال فترة مع فلترة حسب المستخدم.</p> },
        ]}
      />
    </>
  );
}

export default ReportsPage;
