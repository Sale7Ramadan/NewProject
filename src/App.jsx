import { Navigate, Route, Routes } from 'react-router-dom';
import AdminLayout from './layouts/AdminLayout';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import ProductsPage from './pages/ProductsPage';
import WarehousesPage from './pages/WarehousesPage';
import StockPage from './pages/StockPage';
import MovementsPage from './pages/MovementsPage';
import TransfersPage from './pages/TransfersPage';
import CountingPage from './pages/CountingPage';
import PartnersPage from './pages/PartnersPage';
import InvoicePreviewPage from './pages/InvoicePreviewPage';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<AdminLayout />}>
        <Route index element={<DashboardPage />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="warehouses" element={<WarehousesPage />} />
        <Route path="stock" element={<StockPage />} />
        <Route path="movements" element={<MovementsPage />} />
        <Route path="transfers" element={<TransfersPage />} />
        <Route path="counting" element={<CountingPage />} />
        <Route path="partners" element={<PartnersPage />} />
        <Route path="invoice-preview" element={<InvoicePreviewPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
