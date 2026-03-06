import { Link } from 'react-router-dom';

function LoginPage() {
  return (
    <div className="login-page">
      <form className="login-card">
        <h1>تسجيل الدخول</h1>
        <p>نموذج تجريبي بدون مصادقة حقيقية</p>
        <label>
          اسم المستخدم
          <input defaultValue="admin" />
        </label>
        <label>
          كلمة المرور
          <input type="password" defaultValue="123456" />
        </label>
        <Link to="/" className="btn-primary">دخول للنظام</Link>
      </form>
    </div>
  );
}

export default LoginPage;
