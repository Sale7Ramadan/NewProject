function PageHeader({ title, subtitle, actions, breadcrumbs }) {
  return (
    <header className="page-header">
      <div>
        {breadcrumbs && <p className="breadcrumbs">{breadcrumbs.join(' / ')}</p>}
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </div>
      {actions && <div className="header-actions">{actions}</div>}
    </header>
  );
}

export default PageHeader;
