
import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  ShoppingCart, 
  GraduationCap, 
  Users, 
  Target, 
  Wallet, 
  Settings, 
  Menu, 
  X,
  Bell,
  Search
} from 'lucide-react';
import Dashboard from './components/Dashboard';
import Enrollments from './components/Enrollments';
import Projects from './components/Projects';
import Payments from './components/Payments';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const menuItems = [
    { id: 'dashboard', label: 'Painel Geral', icon: <LayoutDashboard className="w-5 h-5" /> },
    { id: 'vendas', label: 'Gestão de Vendas', icon: <ShoppingCart className="w-5 h-5" /> },
    { id: 'matriculas', label: 'Matrículas', icon: <GraduationCap className="w-5 h-5" /> },
    { id: 'funcionarios', label: 'Funcionários', icon: <Users className="w-5 h-5" /> },
    { id: 'projetos', label: 'Financiamento', icon: <Target className="w-5 h-5" /> },
    { id: 'pagamentos', label: 'Pagamentos', icon: <Wallet className="w-5 h-5" /> },
    { id: 'config', label: 'Configurações', icon: <Settings className="w-5 h-5" /> },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard': return <Dashboard />;
      case 'matriculas': return <Enrollments />;
      case 'projetos': return <Projects />;
      case 'pagamentos': return <Payments />;
      default: return (
        <div className="flex flex-col items-center justify-center h-full text-slate-400 py-20">
          <div className="p-4 bg-slate-100 rounded-full mb-4">
            <LayoutDashboard className="w-12 h-12" />
          </div>
          <p className="text-xl font-medium">Módulo em Desenvolvimento</p>
          <p className="text-sm">Esta funcionalidade estará disponível na próxima atualização.</p>
        </div>
      );
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar Mobile Overlay */}
      {!isSidebarOpen && (
        <div className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-20" onClick={() => setIsSidebarOpen(true)}></div>
      )}

      {/* Sidebar */}
      <aside className={`fixed lg:static inset-y-0 left-0 z-30 w-72 bg-white border-r border-slate-200 transition-transform duration-300 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
        <div className="h-full flex flex-col">
          <div className="p-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-indigo-200">
                K
              </div>
              <h1 className="text-xl font-bold text-slate-800 tracking-tight">KwanzaFlow</h1>
            </div>
            <button className="lg:hidden" onClick={() => setIsSidebarOpen(false)}>
              <X className="w-6 h-6 text-slate-500" />
            </button>
          </div>

          <nav className="flex-1 px-4 py-4 space-y-1">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  if (window.innerWidth < 1024) setIsSidebarOpen(false);
                }}
                className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  activeTab === item.id 
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-100' 
                  : 'text-slate-500 hover:bg-slate-50 hover:text-slate-800'
                }`}
              >
                {item.icon}
                {item.label}
              </button>
            ))}
          </nav>

          <div className="p-4 mt-auto">
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
              <div className="flex items-center gap-3 mb-3">
                <img src="https://picsum.photos/40/40" className="w-10 h-10 rounded-full border-2 border-white shadow-sm" alt="Avatar" />
                <div>
                  <p className="text-sm font-bold text-slate-800">Admin Angola</p>
                  <p className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">Super Administrator</p>
                </div>
              </div>
              <button className="w-full py-2 bg-white text-rose-500 border border-rose-100 rounded-lg text-xs font-bold hover:bg-rose-50 transition-colors">
                Terminar Sessão
              </button>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Header */}
        <header className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-6 lg:px-10 shrink-0">
          <div className="flex items-center gap-4">
            <button className="lg:hidden p-2 text-slate-500" onClick={() => setIsSidebarOpen(true)}>
              <Menu className="w-6 h-6" />
            </button>
            <div className="relative hidden md:block w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
              <input 
                type="text" 
                placeholder="Pesquisa rápida (Ctrl + K)" 
                className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none text-sm"
              />
            </div>
          </div>

          <div className="flex items-center gap-3 lg:gap-6">
            <button className="p-2 text-slate-500 hover:bg-slate-50 rounded-full relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-rose-500 border-2 border-white rounded-full"></span>
            </button>
            <div className="h-8 w-[1px] bg-slate-200 mx-2 hidden lg:block"></div>
            <div className="hidden lg:block text-right">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Saldo Disponível</p>
              <p className="text-lg font-bold text-emerald-600">8.250.400,00 Kz</p>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-6 lg:p-10">
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default App;
