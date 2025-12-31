
import React from 'react';
import { CreditCard, Smartphone, Banknote, ShieldCheck, ArrowRight } from 'lucide-react';
import { PaymentMethod } from '../types';

const Payments: React.FC = () => {
  const methods = [
    { name: 'PayPay AO', icon: <Smartphone />, color: 'bg-orange-500', desc: 'Pagamento instantâneo via QR Code' },
    { name: 'Pagamento Express', icon: <CreditCard />, color: 'bg-blue-600', desc: 'Rede Multicaixa Express' },
    { name: 'Transferência Bancária', icon: <Banknote />, color: 'bg-emerald-600', desc: 'BAI, BFA, BIC e outros' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Pagamentos e Integrações</h1>
          <p className="text-slate-500">Sincronização com gateways locais e conciliação bancária.</p>
        </div>
        <div className="flex items-center gap-2 text-green-600 bg-green-50 px-3 py-1 rounded-full border border-green-100">
          <ShieldCheck className="w-4 h-4" />
          <span className="text-xs font-bold">Criptografia Ativa</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {methods.map((method) => (
          <div key={method.name} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 relative group cursor-pointer hover:-translate-y-1 transition-transform">
            <div className={`w-12 h-12 rounded-lg ${method.color} text-white flex items-center justify-center mb-4`}>
              {method.icon}
            </div>
            <h3 className="text-lg font-bold text-slate-800">{method.name}</h3>
            <p className="text-sm text-slate-500 mt-1">{method.desc}</p>
            <div className="mt-4 flex items-center text-xs font-bold text-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity">
              Configurar Integração <ArrowRight className="w-3 h-3 ml-1" />
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
        <h3 className="text-lg font-bold text-slate-800 mb-4">Histórico Recente de Transações</h3>
        <div className="space-y-4">
          {[
            { id: 'T102', user: 'Manuel Bento', method: 'PayPay AO', amount: '2.500 Kz', status: 'Confirmado', date: 'Hoje, 10:45' },
            { id: 'T101', user: 'Rosa Maria', method: 'Transf. BAI', amount: '45.000 Kz', status: 'Aguardando', date: 'Hoje, 09:12' },
            { id: 'T100', user: 'Instituição X', method: 'Pag. Express', amount: '120.000 Kz', status: 'Confirmado', date: 'Ontem' },
          ].map((tx) => (
            <div key={tx.id} className="flex items-center justify-between p-3 hover:bg-slate-50 rounded-lg transition-colors border-l-4 border-l-indigo-500">
              <div className="flex gap-4 items-center">
                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 font-bold">
                  {tx.user.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-800">{tx.user}</p>
                  <p className="text-xs text-slate-500">{tx.method} • {tx.date}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-bold text-slate-800">{tx.amount}</p>
                <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded ${
                  tx.status === 'Confirmado' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'
                }`}>
                  {tx.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Payments;
