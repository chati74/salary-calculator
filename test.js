import calSalary from './salary-calculator.js'; //import calSalary
import Chalk from 'chalk'; //chalk is using for colorful logs.


const CalSalary = new calSalary(); //getting new obj from calSalary

//pushing 2 ranks with their hour rate
CalSalary.PushRank('Junior', 15)
CalSalary.PushRank('Senior', 30)

//pushing 1 employee with his info (Name:'Jackson West' , Rank:'Junior' , WorkHour:10 , OverTimeHour:2 , SalaryRate:25)
CalSalary.PushEmployee('Jackson West', 'Junior', 10, 2, 25)

const base_salary = CalSalary.BaseSalary('Jackson West');//calculating salary without applying overtime or special rate.
const overtime_salary = CalSalary.ApplyOvertime('Jackson West');//calculating salary with applying overtime.
const salaryRate_salary = CalSalary.ApplySalaryRate('Jackson West');//calculating salary with applying special rate.
const aBonusOvertime_salary = CalSalary.AllBonusOvertime('Jackson West');//calculating salary with applying overtime after applying rate.
const aBonusRate_salary = CalSalary.AllBonusRate('Jackson West');//calculating salary with applying salary rate after applying overtime.


console.log(Chalk.red("Jackson Wests") + Chalk.blue(" base salary is ") + Chalk.green(base_salary + "$") + Chalk.blue(" for 10 hours of working."));
console.log(Chalk.red("Jackson Wests") + Chalk.blue(" overtime salary is ") + Chalk.green(overtime_salary + "$") + Chalk.blue(" for 10 hours of working + 2 hours overtime."));
console.log(Chalk.red("Jackson Wests") + Chalk.blue(" rated salary is ") + Chalk.green(salaryRate_salary + "$") + Chalk.blue(" for 10 hours of working + 25% rate."));
console.log(Chalk.red("Jackson Wests") + Chalk.blue(" whole salary is ") + Chalk.green(aBonusOvertime_salary + "$") + Chalk.blue(" for 10 hours of working + 25% rate + 2 hours overtime."));
console.log(Chalk.red("Jackson Wests") + Chalk.blue(" whole salary is ") + Chalk.green(aBonusRate_salary + "$") + Chalk.blue(" for 10 hours of working + 2 hours overtime + 25% rate."));