import { Link } from 'react-router-dom';

function LoginPage() {
  return (
    <div className="login-screen">
      <form className="login-card">
        <h1>تسجيل الدخول للنظام</h1>
        <p>واجهة تجريبية بدون صلاحيات حقيقية</p>
        <label>اسم المستخدم<input defaultValue="admin" /></label>
        <label>كلمة المرور<input type="password" defaultValue="123456" /></label>
        <label>نوع المستخدم
          <select defaultValue="manager">
            <option value="manager">مدير</option>
            <option value="employee">موظف</option>
          </select>
        </label>
        <Link to="/" className="primary-btn">دخول</Link>
      </form>
    </div>
  );
}

export default LoginPage;
