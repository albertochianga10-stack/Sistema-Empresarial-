
export enum PaymentMethod {
  PAYPAY_AO = 'PayPay AO',
  PAGAMENTO_EXPRESS = 'Pagamento Express',
  TRANSFERENCIA_BAI = 'Transferência BAI',
  TRANSFERENCIA_BFA = 'Transferência BFA',
  TRANSFERENCIA_BIC = 'Transferência BIC',
  DINHEIRO = 'Dinheiro'
}

export enum EnrollmentStatus {
  CONFIRMADA = 'Confirmada',
  RECONFIRMADA = 'Reconfirmada',
  PENDENTE = 'Pendente'
}

export interface Sale {
  id: string;
  item: string;
  category: 'Geral' | 'Folha de Prova';
  amount: number;
  date: string;
  employeeId: string;
  paymentStatus: 'Pago' | 'Pendente';
}

export interface Enrollment {
  id: string;
  studentName: string;
  course: string;
  period: 'Manhã' | 'Tarde' | 'Noite';
  status: EnrollmentStatus;
  value: number;
  paidValue: number;
  date: string;
}

export interface Employee {
  id: string;
  name: string;
  role: string;
  salary: number;
  commission: number;
  status: 'Ativo' | 'Inativo';
}

export interface Project {
  id: string;
  name: string;
  funder: string;
  budget: number;
  spent: number;
  startDate: string;
  status: 'Em Planeamento' | 'Em Execução' | 'Concluído';
}

export interface DashboardStats {
  totalRevenue: number;
  totalExpenses: number;
  pendingPayments: number;
  activeEnrollments: number;
}
