import StatusBadge from './StatusBadge';

function DataTable({ columns, rows }) {
  if (!rows.length) {
    return <p className="empty-inline">لا توجد بيانات حاليًا.</p>;
  }

  return (
    <div className="table-card">
      <table>
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.key}>{column.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={row.id || index}>
              {columns.map((column) => (
                <td key={column.key}>
                  {column.type === 'status' ? <StatusBadge label={row[column.key]} /> : row[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;
