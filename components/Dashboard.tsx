
import React, { useState, useEffect } from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area 
} from 'recharts';
import { DollarSign, Users, GraduationCap, Briefcase, Sparkles, TrendingUp } from 'lucide-react';
import StatCard from './ui/StatCard';
import { MOCK_SALES, MOCK_ENROLLMENTS, MOCK_PROJECTS } from '../constants';
import { getFinancialInsights } from '../services/geminiService';

const Dashboard: React.FC = () => {
  const [insights, setInsights] = useState<string>('Gerando insights com IA...');

  useEffect(() => {
    const loadInsights = async () => {
      const result = await getFinancialInsights({
        vendas: MOCK_SALES,
        matriculas: MOCK_ENROLLMENTS,
        projetos: MOCK_PROJECTS
      });
      setInsights(result);
    };
    loadInsights();
  }, []);

  const dataChart = [
    { name: 'Jan', receita: 400000, despesa: 240000 },
    { name: 'Fev', receita: 300000, despesa: 139000 },
    { name: 'Mar', receita: 200000, despesa: 980000 },
    { name: 'Abr', receita: 278000, despesa: 390000 },
    { name: 'Mai', receita: 189000, despesa: 480000 },
    { name: 'Jun', receita: 239000, despesa: 380000 },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Painel de Controlo</h1>
          <p className="text-slate-500">Visão geral da sua empresa em tempo real.</p>
        </div>
        <div className="bg-indigo-50 px-4 py-2 rounded-lg border border-indigo-100 flex items-center gap-2">
          <TrendingUp className="w-4 h-4 text-indigo-600" />
          <span className="text-sm font-semibold text-indigo-700">Meta Mensal: 85%</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          title="Receita Total" 
          value="4.500.000 Kz" 
          icon={<DollarSign className="w-6 h-6" />} 
          trend="+12% este mês"
          color="bg-emerald-500"
        />
        <StatCard 
          title="Matrículas Ativas" 
          value="1.240" 
          icon={<GraduationCap className="w-6 h-6" />} 
          color="bg-blue-500"
        />
        <StatCard 
          title="Vendas Mensais" 
          value="15.800" 
          icon={<Users className="w-6 h-6" />} 
          color="bg-amber-500"
        />
        <StatCard 
          title="Projetos Ativos" 
          value="8" 
          icon={<Briefcase className="w-6 h-6" />} 
          color="bg-indigo-500"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-slate-100">
          <h3 className="text-lg font-bold text-slate-800 mb-6">Fluxo de Caixa (Kz)</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={dataChart}>
                <defs>
                  <linearGradient id="colorReceita" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false} />
                <Tooltip />
                <Area type="monotone" dataKey="receita" stroke="#10b981" fillOpacity={1} fill="url(#colorReceita)" strokeWidth={2} />
                <Area type="monotone" dataKey="despesa" stroke="#f43f5e" fillOpacity={0} strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-gradient-to-br from-slate-900 to-indigo-900 p-6 rounded-xl shadow-lg text-white">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-indigo-300" />
            <h3 className="text-lg font-bold">Insights Estratégicos (IA)</h3>
          </div>
          <div className="space-y-4">
            <p className="text-sm text-indigo-100 leading-relaxed italic">
              "{insights}"
            </p>
            <button className="w-full py-2 bg-indigo-500 hover:bg-indigo-400 rounded-lg text-sm font-medium transition-colors">
              Refazer Análise
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
