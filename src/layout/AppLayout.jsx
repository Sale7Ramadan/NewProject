import { NavLink, Outlet } from 'react-router-dom';
import { navSections } from '../data/navigation';

function AppLayout() {
  return (
    <div className="app-layout">
      <aside className="sidebar">
        <div className="brand">
          <h2>Simple Store</h2>
          <span>إدارة المتجر</span>
        </div>
        {navSections.map((section) => (
          <div key={section.title} className="nav-group">
            <p>{section.title}</p>
            {section.links.map((link) => (
              <NavLink key={link.to} to={link.to} end={link.to === '/'}>
                {link.label}
              </NavLink>
            ))}
          </div>
        ))}
      </aside>

      <div className="main-shell">
        <header className="topbar">
          <input placeholder="بحث سريع: صنف، فاتورة، عميل..." />
          <div className="topbar-meta">
            <strong>فرع الرياض الرئيسي</strong>
            <small>مرحلة تجريبية - بيانات وهمية</small>
          </div>
        </header>
        <main className="page-container">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AppLayout;
