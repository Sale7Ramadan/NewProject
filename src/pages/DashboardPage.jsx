import PageHeader from '../components/PageHeader';
import StatCard from '../components/StatCard';
import DataTable from '../components/DataTable';
import { dashboardStats, movementTimeline, miniCharts } from '../data/dashboard';

function DashboardPage() {
  const columns = [
    { key: 'no', label: 'المرجع' },
    { key: 'date', label: 'التاريخ' },
    { key: 'item', label: 'الصنف' },
    { key: 'type', label: 'النوع' },
    { key: 'qty', label: 'الكمية' },
    { key: 'status', label: 'الحالة', type: 'status' },
  ];

  return (
    <>
      <PageHeader title="لوحة التحكم" subtitle="نظرة عامة على أداء المتجر وحركة الأصناف" />
      <section className="stats-grid">{dashboardStats.map((card) => <StatCard key={card.label} {...card} />)}</section>
      <section className="charts-grid">
        <article className="chart-card">
          <h3>مبيعات الأسبوع</h3>
          <div className="bars">{miniCharts.weeklySales.map((v) => <span key={v} style={{ height: `${v}%` }} />)}</div>
        </article>
        <article className="chart-card">
          <h3>مشتريات الأسبوع</h3>
          <div className="bars">{miniCharts.weeklyPurchases.map((v) => <span key={v} style={{ height: `${v}%` }} />)}</div>
        </article>
      </section>
      <section>
        <h3 className="section-title">آخر الحركات</h3>
        <DataTable columns={columns} rows={movementTimeline} />
      </section>
    </>
  );
}

export default DashboardPage;
