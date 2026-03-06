import DataTable from '../components/DataTable';
import FilterBar from '../components/FilterBar';
import PageHeader from '../components/PageHeader';
import { stockPerWarehouse } from '../mock/entities';

function StockPage() {
  const columns = [
    { key: 'warehouse', label: 'المستودع' },
    { key: 'product', label: 'الصنف' },
    { key: 'available', label: 'المتوفر' },
    { key: 'reserved', label: 'المحجوز' },
    { key: 'status', label: 'الحالة', type: 'status' },
  ];

  return (
    <>
      <PageHeader title="المخزون حسب المستودع" description="تتبع الكميات المتوفرة والمحجوزة لكل موقع." />
      <FilterBar />
      <DataTable columns={columns} rows={stockPerWarehouse} />
    </>
  );
}

export default StockPage;
