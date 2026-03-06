import PageHeader from '../components/PageHeader';
import { invoice } from '../mock/entities';

function InvoicePreviewPage() {
  const subtotal = invoice.items.reduce((sum, item) => sum + item.qty * item.price, 0);
  const vat = subtotal * 0.15;
  const total = subtotal + vat;

  return (
    <>
      <PageHeader title="معاينة الفاتورة" description="صفحة تجريبية لطباعة ومراجعة الفواتير." actions={<button>طباعة</button>} />
      <section className="panel invoice">
        <div className="invoice-head">
          <div>
            <h3>فاتورة مبيعات #{invoice.no}</h3>
            <p>التاريخ: {invoice.date}</p>
          </div>
          <div>
            <p>العميل: {invoice.customer}</p>
            <p>مندوب المبيعات: {invoice.salesRep}</p>
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <th>الصنف</th>
              <th>الكمية</th>
              <th>سعر الوحدة</th>
              <th>الإجمالي</th>
            </tr>
          </thead>
          <tbody>
            {invoice.items.map((item) => (
              <tr key={item.name}>
                <td>{item.name}</td>
                <td>{item.qty}</td>
                <td>{item.price} ر.س</td>
                <td>{item.qty * item.price} ر.س</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="invoice-summary">
          <p>المجموع: {subtotal.toFixed(2)} ر.س</p>
          <p>ضريبة القيمة المضافة (15%): {vat.toFixed(2)} ر.س</p>
          <h4>الإجمالي النهائي: {total.toFixed(2)} ر.س</h4>
        </div>
      </section>
    </>
  );
}

export default InvoicePreviewPage;
