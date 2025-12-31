
import React from 'react';
import { Target, TrendingUp, Landmark, Calendar } from 'lucide-react';
import { MOCK_PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-800">Projetos Financiados</h1>
        <p className="text-slate-500">Monitoramento de investimentos e retorno financeiro.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {MOCK_PROJECTS.map((project) => (
          <div key={project.id} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-6">
              <div className="p-3 bg-indigo-50 rounded-lg">
                <Target className="w-6 h-6 text-indigo-600" />
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                project.status === 'Concluído' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
              }`}>
                {project.status}
              </span>
            </div>
            
            <h3 className="text-xl font-bold text-slate-800 mb-2">{project.name}</h3>
            <div className="flex items-center gap-2 text-slate-500 text-sm mb-4">
              <Landmark className="w-4 h-4" />
              Financiador: {project.funder}
            </div>

            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-slate-500">Execução Orçamental</span>
                  <span className="font-bold text-slate-700">
                    {((project.spent / project.budget) * 100).toFixed(1)}%
                  </span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-3">
                  <div 
                    className="bg-indigo-500 h-3 rounded-full" 
                    style={{ width: `${(project.spent / project.budget) * 100}%` }}
                  ></div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-50">
                <div>
                  <p className="text-xs text-slate-400 font-medium">Investido</p>
                  <p className="text-sm font-bold text-slate-700">{project.budget.toLocaleString()} Kz</p>
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium">Gasto Atual</p>
                  <p className="text-sm font-bold text-rose-600">{project.spent.toLocaleString()} Kz</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <Calendar className="w-3.5 h-3.5" />
                Início em: {new Date(project.startDate).toLocaleDateString('pt-AO')}
              </div>
            </div>
          </div>
        ))}

        <button className="border-2 border-dashed border-slate-200 rounded-xl p-6 flex flex-col items-center justify-center text-slate-400 hover:border-indigo-400 hover:text-indigo-500 transition-all">
          <TrendingUp className="w-8 h-8 mb-2" />
          <span className="font-bold">Cadastrar Novo Projeto</span>
          <span className="text-xs">Definir metas e financiadores</span>
        </button>
      </div>
    </div>
  );
};

export default Projects;
