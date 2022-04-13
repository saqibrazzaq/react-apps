import { v4 as uuidv4 } from 'uuid';

const jobs = [
  {
    id: uuidv4(),
    title: 'Senior .Net Developer',
    category: 'IT',
    minExpYears: 4,
    salaryPkr: 120000,
    skills: ['C#', 'JavaScript', '.NET']
  },
  {
    id: uuidv4(),
    title: 'WordPress Developer',
    category: 'IT',
    minExpYears: 3,
    salaryPkr: 110000,
    skills: ['CSS', 'JavaScript', 'HTML']
  },
  {
    id: uuidv4(),
    title: 'Digital Marketing Manager',
    category: 'IT',
    minExpYears: 2,
    salaryPkr: 40000,
    skills: ['Google Ads', 'Adword', 'SEO']
  },
  {
    id: uuidv4(),
    title: 'Senior JavaScript Developer (Node / React)',
    category: 'IT',
    minExpYears: 5,
    salaryPkr: 140000,
    skills: ['Angular', 'React JS', 'NodeJs']
  },
  {
    id: uuidv4(),
    title: 'HR / Admin Officer',
    category: 'Call Center',
    minExpYears: 1,
    salaryPkr: 50000,
    skills: ['Fluent in English', 'General Office Administration', 'Employee Administration']
  },
  {
    id: uuidv4(),
    title: 'Customer Sales Representative (CSR)',
    category: 'Call Center',
    minExpYears: 0,
    salaryPkr: 30000,
    skills: ['Fluent in English', 'Sales', 'Customer Handling']
  },
  {
    id: uuidv4(),
    title: 'Accounts Manager',
    category: 'Real Estate',
    minExpYears: 4,
    salaryPkr: 60000,
    skills: ['Account Management', 'CA', 'ACCA']
  },
  {
    id: uuidv4(),
    title: 'Sales Executive',
    category: 'Real Estate',
    minExpYears: 0,
    salaryPkr: 25000,
    skills: ['Sales', 'Digital Marketing', 'Negotiation']
  }
];

export default jobs;