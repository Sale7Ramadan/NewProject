import PageHeader from '../components/PageHeader';
import DataTable from '../components/DataTable';
import { users } from '../data/users';

function UsersListPage() {
  const columns = [
    { key: 'name', label: 'الاسم' },
    { key: 'username', label: 'اسم المستخدم' },
    { key: 'role', label: 'النوع' },
    { key: 'status', label: 'الحالة', type: 'status' },
    { key: 'lastLogin', label: 'آخر دخول' },
  ];

  return (
    <>
      <PageHeader title="قائمة المستخدمين" actions={<button className="primary-btn">إضافة مستخدم</button>} />
      <DataTable columns={columns} rows={users} />
    </>
  );
}

export default UsersListPage;
