import DataTable from '../components/DataTable';
import FilterBar from '../components/FilterBar';
import PageHeader from '../components/PageHeader';
import { products } from '../mock/entities';

function ProductsPage() {
  const columns = [
    { key: 'code', label: 'الكود' },
    { key: 'name', label: 'اسم المنتج' },
    { key: 'category', label: 'التصنيف' },
    { key: 'unit', label: 'الوحدة' },
    { key: 'minStock', label: 'حد الطلب' },
    { key: 'status', label: 'الحالة', type: 'status' },
  ];

  return (
    <>
      <PageHeader title="المنتجات" description="إدارة أصناف الدهانات والمواد المرتبطة." actions={<button>إضافة منتج</button>} />
      <FilterBar />
      <DataTable columns={columns} rows={products} />
    </>
  );
}

export default ProductsPage;
