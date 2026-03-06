import StatusBadge from './StatusBadge';

function DataTable({ columns, rows }) {
  return (
    <div className="table-wrap">
      <table>
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col.key}>{col.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => (
            <tr key={idx}>
              {columns.map((col) => {
                const value = row[col.key];
                if (col.type === 'status') {
                  return (
                    <td key={col.key}>
                      <StatusBadge label={value} />
                    </td>
                  );
                }
                return <td key={col.key}>{value}</td>;
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;
