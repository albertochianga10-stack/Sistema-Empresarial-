
import React from 'react';
import { Sale, Enrollment, Employee, Project, EnrollmentStatus } from './types';

export const MOCK_SALES: Sale[] = [
  { id: '1', item: 'Folha de Prova A4', category: 'Folha de Prova', amount: 500, date: '2023-10-25', employeeId: 'emp1', paymentStatus: 'Pago' },
  { id: '2', item: 'Uniforme Escolar', category: 'Geral', amount: 15000, date: '2023-10-26', employeeId: 'emp2', paymentStatus: 'Pago' },
  { id: '3', item: 'Kit Escolar', category: 'Geral', amount: 8500, date: '2023-10-27', employeeId: 'emp1', paymentStatus: 'Pendente' },
];

export const MOCK_ENROLLMENTS: Enrollment[] = [
  { id: 'E1', studentName: 'João Manuel', course: 'Informática', period: 'Manhã', status: EnrollmentStatus.CONFIRMADA, value: 45000, paidValue: 45000, date: '2023-10-01' },
  { id: 'E2', studentName: 'Maria Antónia', course: 'Gestão', period: 'Tarde', status: EnrollmentStatus.RECONFIRMADA, value: 40000, paidValue: 20000, date: '2023-10-05' },
];

export const MOCK_EMPLOYEES: Employee[] = [
  { id: 'emp1', name: 'Carlos Silva', role: 'Administrativo', salary: 150000, commission: 5, status: 'Ativo' },
  { id: 'emp2', name: 'Ana Paula', role: 'Vendas', salary: 120000, commission: 8, status: 'Ativo' },
];

export const MOCK_PROJECTS: Project[] = [
  { id: 'P1', name: 'Expansão Laboratório', funder: 'Banco Mundial', budget: 5000000, spent: 1200000, startDate: '2023-01-15', status: 'Em Execução' },
  { id: 'P2', name: 'Capacitação Digital', funder: 'Governo Provincial', budget: 2000000, spent: 2000000, startDate: '2022-11-20', status: 'Concluído' },
];
