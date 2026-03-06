export function LoadingBlock() {
  return <div className="state-card loading">جاري تحميل البيانات...</div>;
}

export function ErrorBlock() {
  return <div className="state-card error">حدث خطأ شكلي في جلب البيانات التجريبية.</div>;
}
