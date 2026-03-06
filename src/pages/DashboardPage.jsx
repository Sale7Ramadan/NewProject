import PageHeader from '../components/PageHeader';
import StatCard from '../components/StatCard';
import DataTable from '../components/DataTable';
import { kpis, recentMovements } from '../mock/dashboard';

function DashboardPage() {
  const columns = [
    { key: 'id', label: 'رقم الحركة' },
    { key: 'type', label: 'النوع' },
    { key: 'warehouse', label: 'المستودع' },
    { key: 'item', label: 'الصنف' },
    { key: 'qty', label: 'الكمية' },
    { key: 'status', label: 'الحالة', type: 'status' },
  ];

  return (
    <>
      <PageHeader title="لوحة التحكم" description="نظرة سريعة على الأداء والمخزون." />
      <section className="stats-grid">{kpis.map((card) => <StatCard key={card.label} {...card} />)}</section>
      <section className="panel">
        <h3>آخر الحركات</h3>
        <DataTable columns={columns} rows={recentMovements} />
      </section>
    </>
  );
}

export default DashboardPage;
