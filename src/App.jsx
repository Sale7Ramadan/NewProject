import { Navigate, Route, Routes } from 'react-router-dom';
import AppLayout from './layout/AppLayout';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import ItemsListPage from './pages/ItemsListPage';
import ItemFormPage from './pages/ItemFormPage';
import CurrentStockPage from './pages/CurrentStockPage';
import ItemMovementPage from './pages/ItemMovementPage';
import OpeningBalancePage from './pages/OpeningBalancePage';
import SuppliersListPage from './pages/SuppliersListPage';
import SupplierFormPage from './pages/SupplierFormPage';
import CustomersListPage from './pages/CustomersListPage';
import CustomerFormPage from './pages/CustomerFormPage';
import PurchaseInvoicesPage from './pages/PurchaseInvoicesPage';
import PurchaseInvoiceCreatePage from './pages/PurchaseInvoiceCreatePage';
import PurchaseInvoiceDetailsPage from './pages/PurchaseInvoiceDetailsPage';
import SalesInvoicesPage from './pages/SalesInvoicesPage';
import SalesInvoiceCreatePage from './pages/SalesInvoiceCreatePage';
import SalesInvoiceDetailsPage from './pages/SalesInvoiceDetailsPage';
import ReportsPage from './pages/ReportsPage';
import UsersListPage from './pages/UsersListPage';
import UserFormPage from './pages/UserFormPage';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<AppLayout />}>
        <Route index element={<DashboardPage />} />
        <Route path="items" element={<ItemsListPage />} />
        <Route path="items/form" element={<ItemFormPage />} />
        <Route path="stock" element={<CurrentStockPage />} />
        <Route path="item-movement" element={<ItemMovementPage />} />
        <Route path="opening-balance" element={<OpeningBalancePage />} />
        <Route path="suppliers" element={<SuppliersListPage />} />
        <Route path="suppliers/form" element={<SupplierFormPage />} />
        <Route path="customers" element={<CustomersListPage />} />
        <Route path="customers/form" element={<CustomerFormPage />} />
        <Route path="purchase-invoices" element={<PurchaseInvoicesPage />} />
        <Route path="purchase-invoices/create" element={<PurchaseInvoiceCreatePage />} />
        <Route path="purchase-invoices/:id" element={<PurchaseInvoiceDetailsPage />} />
        <Route path="sales-invoices" element={<SalesInvoicesPage />} />
        <Route path="sales-invoices/create" element={<SalesInvoiceCreatePage />} />
        <Route path="sales-invoices/:id" element={<SalesInvoiceDetailsPage />} />
        <Route path="reports" element={<ReportsPage />} />
        <Route path="users" element={<UsersListPage />} />
        <Route path="users/form" element={<UserFormPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
