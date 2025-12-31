
import React from 'react';
import { Search, Plus, Filter, MoreVertical, CheckCircle2, Clock } from 'lucide-react';
import { MOCK_ENROLLMENTS } from '../constants';

const Enrollments: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Matrículas e Reconfirmações</h1>
          <p className="text-slate-500">Gestão acadêmica e financeira de alunos.</p>
        </div>
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 shadow-sm transition-all">
          <Plus className="w-4 h-4" />
          Nova Matrícula
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="p-4 border-b border-slate-100 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
            <input 
              type="text" 
              placeholder="Pesquisar por aluno ou curso..." 
              className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none text-sm"
            />
          </div>
          <div className="flex gap-2 w-full md:w-auto">
            <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50">
              <Filter className="w-4 h-4" />
              Filtros
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-50 text-slate-500 text-xs font-semibold uppercase tracking-wider">
              <tr>
                <th className="px-6 py-4">Aluno</th>
                <th className="px-6 py-4">Curso / Período</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Valor Total</th>
                <th className="px-6 py-4">Pago</th>
                <th className="px-6 py-4">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {MOCK_ENROLLMENTS.map((enrollment) => (
                <tr key={enrollment.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="font-semibold text-slate-800">{enrollment.studentName}</div>
                    <div className="text-xs text-slate-400">ID: {enrollment.id}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-slate-600 font-medium">{enrollment.course}</div>
                    <div className="text-xs text-slate-400">{enrollment.period}</div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold inline-flex items-center gap-1 ${
                      enrollment.status === 'Confirmada' ? 'bg-green-100 text-green-700' : 
                      enrollment.status === 'Reconfirmada' ? 'bg-blue-100 text-blue-700' : 'bg-amber-100 text-amber-700'
                    }`}>
                      {enrollment.status === 'Confirmada' ? <CheckCircle2 className="w-3 h-3" /> : <Clock className="w-3 h-3" />}
                      {enrollment.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm font-semibold text-slate-700">
                    {enrollment.value.toLocaleString()} Kz
                  </td>
                  <td className="px-6 py-4">
                    <div className="w-full bg-slate-200 rounded-full h-2 w-24">
                      <div 
                        className="bg-indigo-600 h-2 rounded-full" 
                        style={{ width: `${(enrollment.paidValue / enrollment.value) * 100}%` }}
                      ></div>
                    </div>
                    <span className="text-xs text-slate-500 mt-1 block">
                      {(enrollment.paidValue).toLocaleString()} Kz
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button className="text-slate-400 hover:text-slate-600">
                      <MoreVertical className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Enrollments;
