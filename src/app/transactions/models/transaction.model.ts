export interface Transaction {
	id: string;
	status: 'SUCCESSFUL' | 'REJECTED' | string;
	paymentMethod: string;
	salesType: string;
	createdAt: number;
	transactionReference: number;
	amount: number;
	deduction?: number;
	franchise: string;
}

