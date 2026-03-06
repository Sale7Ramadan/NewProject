import PageHeader from '../components/PageHeader';
import SearchBar from '../components/SearchBar';
import FilterPanel from '../components/FilterPanel';
import DataTable from '../components/DataTable';
import { items } from '../data/items';

function ItemsListPage() {
  const columns = [
    { key: 'code', label: 'كود الصنف' },
    { key: 'name', label: 'اسم الصنف' },
    { key: 'category', label: 'التصنيف' },
    { key: 'unit', label: 'الوحدة' },
    { key: 'buyPrice', label: 'سعر الشراء' },
    { key: 'sellPrice', label: 'سعر البيع' },
    { key: 'minStock', label: 'الحد الأدنى' },
    { key: 'status', label: 'الحالة', type: 'status' },
  ];

  return (
    <>
      <PageHeader title="قائمة الأصناف" subtitle="إدارة الأكواد والأسعار وحالة الصنف" actions={<button className="primary-btn">إضافة صنف</button>} />
      <SearchBar placeholder="بحث بالكود أو الاسم" />
      <FilterPanel />
      <DataTable columns={columns} rows={items} />
    </>
  );
}

export default ItemsListPage;
