import Chalk from 'chalk';

const calSalary = function SalaryCalculator() {
    this.name = [];
    this.rank = []; //Using for pushing ranks via pushRank().
    this.empRank = []; //Given rank to an employee.
    this.workHour = [];
    this.overtimeHour = [];
    this.salaryRate = []; //special salary rate for specific period in percent(%).
    this.hourRate = [];
    this.rankIndex = 0;
    this.empIndex = 0; //Employees array index number;
}

calSalary.prototype.PushRank = function (Rank, HourRate) {
    try {
        this.rank[this.rankIndex] = Rank;
        this.hourRate[this.rankIndex] = HourRate;
        this.rankIndex++;
    } catch (err) {
        if (Rank === null || Rank === undefined) {
            Rank = "";
        }
        if (HourRate === null || HourRate === undefined) {
            HourRate = 0;
        }
    } finally {
        this.rank[this.rankIndex] = Rank;
        this.hourRate[this.rankIndex] = HourRate;
        this.rankIndex++;
    }
}

/*
* necessary : Name,Rank,WorkHour
* unnecessary : OverTimeHour,SalaryRate
* */
calSalary.prototype.PushEmployee = function (Name, Rank, WorkHour, OvertimeHour, SalaryRate) {
    try {
        this.name[this.empIndex] = Name;
        this.empRank[this.empIndex] = Rank;
        this.workHour[this.empIndex] = WorkHour;
        this.overtimeHour[this.empIndex] = OvertimeHour;
        this.salaryRate[this.empIndex] = SalaryRate;
        this.empIndex++;
    } catch (err) {
        if (Name === null || Name === undefined) {
            Name = "";
        }
        if (Rank === null || Rank === undefined) {
            Rank = "";
        }
        if (WorkHour === null || WorkHour === undefined) {
            WorkHour = 0;
        }
        if (OvertimeHour === null || OvertimeHour === undefined) {
            OvertimeHour = 0;
        }
        if (SalaryRate === null || SalaryRate === undefined) {
            SalaryRate = 0;
        }
        if (SalaryRate > 100) {
            SalaryRate = 100;
        }
    } finally {
        this.name[this.empIndex] = Name;
        this.empRank[this.empIndex] = Rank;
        this.workHour[this.empIndex] = WorkHour;
        this.overtimeHour[this.empIndex] = OvertimeHour;
        this.salaryRate[this.empIndex] = SalaryRate;
        this.empIndex++;
    }
}

calSalary.prototype.BaseSalary = function (Name) {
    try {
        const empIndexNum = this.name.indexOf(Name);
        const targetRank = this.empRank[empIndexNum];
        const rankIndexNum = this.rank.indexOf(targetRank);
        const targetHourRate = this.hourRate[rankIndexNum]
        const targetWorkHour = this.workHour[empIndexNum];
        const result = targetHourRate * targetWorkHour;

        return (result)
    } catch (err) {
        const result = Chalk.red("Something went wrong !")
        Chalk.yellow(" problem in running BaseSalary function. Make sure that all values are insert correctly by their specific type.");

        return (result)
    }
}

calSalary.prototype.ApplyOvertime = function (Name) {
    try {
        const empIndexNum = this.name.indexOf(Name);
        const targetOvertime = this.overtimeHour[empIndexNum];
        const targetWorkHour = this.workHour[empIndexNum];
        const targetRank = this.empRank[empIndexNum];
        const rankIndexNum = this.rank.indexOf(targetRank);
        const targetHourRate = this.hourRate[rankIndexNum]
        const result = (targetOvertime + targetWorkHour) * targetHourRate;

        return (result)
    } catch (err) {
        const result = Chalk.red("Something went wrong !")
        Chalk.yellow(" problem in running ApplyOvertime function. Make sure that all values are insert correctly by their specific type.");

        return (result)
    }
}

calSalary.prototype.ApplySalaryRate = function (Name) {
    try {
        const empIndexNum = this.name.indexOf(Name);
        const targetSalaryRate = this.salaryRate[empIndexNum];
        const targetWorkHour = this.workHour[empIndexNum];
        const targetRank = this.empRank[empIndexNum];
        const rankIndexNum = this.rank.indexOf(targetRank);
        const targetHourRate = this.hourRate[rankIndexNum]
        const salary = targetHourRate * targetWorkHour;
        const salaryRateValue = (salary * targetSalaryRate) / 100;
        const result = salary + salaryRateValue;

        return (result)
    } catch (err) {
        const result = Chalk.red("Something went wrong !")
        Chalk.yellow(" problem in running ApplySalaryRate function. Make sure that all values are insert correctly by their specific type.");

        return (result)
    }
}

calSalary.prototype.AllBonusRate = function (Name) {
    try {
        const empIndexNum = this.name.indexOf(Name);
        const targetOvertime = this.overtimeHour[empIndexNum];
        const targetSalaryRate = this.salaryRate[empIndexNum];
        const targetWorkHour = this.workHour[empIndexNum];
        const targetRank = this.empRank[empIndexNum];
        const rankIndexNum = this.rank.indexOf(targetRank);
        const targetHourRate = this.hourRate[rankIndexNum]
        const overtimeSalary = (targetOvertime + targetWorkHour) * targetHourRate;
        const salaryRateValue = (overtimeSalary * targetSalaryRate) / 100;
        const result = overtimeSalary + salaryRateValue;

        return (result)
    } catch (err) {
        const result = Chalk.red("Something went wrong !")
        Chalk.yellow(" problem in running AllBonusRate function. Make sure that all values are insert correctly by their specific type.");

        return (result)
    }
}

calSalary.prototype.AllBonusOvertime = function (Name) {
    try {
        const empIndexNum = this.name.indexOf(Name);
        const targetOvertime = this.overtimeHour[empIndexNum];
        const targetSalaryRate = this.salaryRate[empIndexNum];
        const targetWorkHour = this.workHour[empIndexNum];
        const targetRank = this.empRank[empIndexNum];
        const rankIndexNum = this.rank.indexOf(targetRank);
        const targetHourRate = this.hourRate[rankIndexNum]
        const baseSalary = targetWorkHour * targetHourRate;
        const salaryRateValue = (baseSalary * targetSalaryRate) / 100;
        const overTimeSalary = (targetOvertime + targetWorkHour) * targetHourRate;
        const result = overTimeSalary + salaryRateValue;

        return (result)
    } catch (err) {
        const result = Chalk.red("Something went wrong !")
        Chalk.yellow(" problem in running AllBonusOvertime function. Make sure that all values are insert correctly by their specific type.");

        return (result)
    }
}

export default calSalary;