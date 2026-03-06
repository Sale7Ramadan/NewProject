import DataTable from '../components/DataTable';
import FilterBar from '../components/FilterBar';
import PageHeader from '../components/PageHeader';
import { partners } from '../mock/entities';

function PartnersPage() {
  const columns = [
    { key: 'code', label: 'الكود' },
    { key: 'name', label: 'الاسم' },
    { key: 'type', label: 'النوع' },
    { key: 'phone', label: 'الهاتف' },
    { key: 'balance', label: 'الرصيد' },
  ];

  return (
    <>
      <PageHeader title="العملاء / الموردون" description="إدارة الأطراف التجارية وسجل الأرصدة." actions={<button>إضافة جهة</button>} />
      <FilterBar />
      <DataTable columns={columns} rows={partners} />
    </>
  );
}

export default PartnersPage;
