export interface Tbus {
  companyName: string;
  no: string;
  category: 'AC' | 'Non-AC';
  capacity: number;
  slot: string[];
}
