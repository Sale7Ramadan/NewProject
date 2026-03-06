import DataTable from '../components/DataTable';
import FilterBar from '../components/FilterBar';
import PageHeader from '../components/PageHeader';
import { movements } from '../mock/entities';

function MovementsPage() {
  const columns = [
    { key: 'no', label: 'رقم الحركة' },
    { key: 'date', label: 'التاريخ' },
    { key: 'type', label: 'النوع' },
    { key: 'ref', label: 'المرجع' },
    { key: 'warehouse', label: 'المستودع' },
    { key: 'status', label: 'الحالة', type: 'status' },
  ];

  return (
    <>
      <PageHeader title="حركات المخزون" description="سجل الإدخال والصرف والتحويل بشكل زمني." />
      <FilterBar />
      <DataTable columns={columns} rows={movements} />
    </>
  );
}

export default MovementsPage;
