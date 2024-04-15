import { Component } from '@angular/core';
import { Loan } from '../_modelo/Loan';
import { ConventionalLoan } from '../_modelo/ConventionalLoan';
@Component({
  selector: 'app-ej1',
  standalone: true,
  imports: [],
  templateUrl: './ej1.component.html',
  styleUrl: './ej1.component.css'
})
export class Ej1Component {

  constructor() { }

  // Function to calculate interest only loan payment
  calculateInterestOnlyLoanPayment(loanTerms: Loan): string {
    // Calculates the monthly payment of an interest only loan
    let interest = loanTerms.interestRate / 1200; // Calculates the Monthly Interest Rate of the loan
    let payment = loanTerms.principal * interest;
    return 'The interest only loan payment is ' + payment.toFixed(2);
  }

  // Function to calculate conventional loan payment
  calculateConventionalLoanPayment(loanTerms: ConventionalLoan): string {
    // Calculates the monthly payment of a conventional loan
    let interest = loanTerms.interestRate / 1200; // Calculates the Monthly Interest Rate of the loan
    let payment = loanTerms.principal * interest / (1 - (Math.pow(1 / (1 + interest), loanTerms.months)));
    return 'The conventional loan payment is ' + payment.toFixed(2);
  }

  // Testing calculateInterestOnlyLoanPayment function
  testInterestOnlyLoanPayment(): void {
    let interestOnlyPayment = this.calculateInterestOnlyLoanPayment({ principal: 30000, interestRate: 5 });
    console.log(interestOnlyPayment); // Returns "The interest only loan payment is 125.00"
  }

  // Testing calculateConventionalLoanPayment function
  testConventionalLoanPayment(): void {
    let conventionalPayment = this.calculateConventionalLoanPayment({ principal: 30000, interestRate: 5, months: 180 });
    console.log(conventionalPayment); // Returns "The conventional loan payment is 237.24"
  }
}
