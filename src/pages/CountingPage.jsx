import DataTable from '../components/DataTable';
import FilterBar from '../components/FilterBar';
import PageHeader from '../components/PageHeader';
import { countSheets } from '../mock/entities';

function CountingPage() {
  const columns = [
    { key: 'no', label: 'رقم الجرد' },
    { key: 'warehouse', label: 'المستودع' },
    { key: 'date', label: 'التاريخ' },
    { key: 'variance', label: 'فرق الجرد' },
    { key: 'status', label: 'الحالة', type: 'status' },
  ];

  return (
    <>
      <PageHeader title="الجرد" description="متابعة نتائج الجرد الدوري والانحرافات." actions={<button>بدء جرد</button>} />
      <FilterBar />
      <DataTable columns={columns} rows={countSheets} />
    </>
  );
}

export default CountingPage;
