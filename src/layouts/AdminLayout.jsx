import { NavLink, Outlet } from 'react-router-dom';
import { navItems } from '../mock/navigation';

function AdminLayout() {
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <h2>نظام الدهانات ERP</h2>
        <nav>
          {navItems.map((item) => (
            <NavLink key={item.path} to={item.path} end={item.path === '/'}>
              {item.label}
            </NavLink>
          ))}
        </nav>
      </aside>
      <div className="main-area">
        <header className="topbar">
          <input placeholder="ابحث عن منتج، حركة، عميل..." />
          <div className="profile">
            <strong>مدير النظام</strong>
            <span>الفرع الرئيسي</span>
          </div>
        </header>
        <main className="content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AdminLayout;
