<div align="center"><img src="image/js-logo.webp" width="80" height="80"></div>

<h3 align="center">Salary Calculator</h3>
<h4 align="center">Simple salary calculator code with JS</h4>

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#About-this-Project">About This Project</a>
    </li>
    <li>
      <a href="#How-to-Use">How to Use</a>
      <ul>
        <li><a href="#Import">Import</a></li>
        <li><a href="#Getting-Object">Getting object</a></li>
        <li><a href="#PushRank">PushRank</a></li>
        <li><a href="#PushEmployee">PushEmployee</a></li>
        <li><a href="#BaseSalary">BaseSalary</a></li>
        <li><a href="#ApplyOvertime">ApllyOvertime</a></li>
        <li><a href="#ApplySalaryRate">ApplySalaryRate</a></li>
        <li><a href="#AllBonusOvertime">AllBonusOvertime</a></li>
        <li><a href="#AllBonusRate">AllBonusRate</a></li>
      </ul>
    </li>
    <li><a href="#License">License</a></li>
    <li><a href="#Credit">Credit</a></li>
  </ol>
</details>

## About this Project
I decided to do a Salary Calculator for my first GitHub project

This code is fully created by Java Script & I added many functions and options to make it more better.
## How To Use
Here is some examples & instructions to learn how to use my Salary Calculator.
### Import
First you must import `calSalary` in whatever file you wanna use it exactly how I did.
```sh
import calSalary from './salary-calculator.js';
```
The directory of `salary-calculator.js` file can be different on your project directory.
### Getting Object
You must get an object from `calSalary` after import it.

you can get the object like this : `const <Objects Name> = new CalSalary();`
```sh
const calSalaryObject = new calSalary();
```
Objects name is on you.
### PushRank
You can push custom ranks with their own HourRate.

* HourRate is a rate that employee will recive for each hour of working.

For example : If you work 10 hours with 15 HourRate, You will recive 150$.

You can push ranks like this : `calSalaryObject.PushRank('Rank Name',Hour);`
```sh
calSalaryObject.PushRank('Senior',20);
```
### PushEmployee
You can push unimited employees with their own Name,Rank,WorkHour,OvertimeHour,SalaryRate.

* Name : Employees name
* Rank : Employees rank
* WorkHour : Employees work time in hour
* OvertimeHour : Employees work time beside Working Time.
* SalaryRate : A special rate in percent that will increase the Salary. For example if you give someone a 25% SalaryRate, his salary will increase for 25%. `100$ => 125$`

For Example we wanna can add employee and give him **`Jackson West`** for name , **`Senior`** for rank , **`10`** for work hour , **`2`** overtime hour , **`25`** % for salary rate.

You can push employees like this : `calSalaryObject.PushEmployee('Name','Rank',WorkHour,OvertimeHour,SalaryRate);`
```sh
calSalaryObject.PushEmployee('Jackson West','Senior',10,2,25);
```
### BaseSalary
You can calculate the base salary using BaseSalary.

BaseSalary will calculate the defualt salary without applying overtime or salary rate.

You can use BaseSalary like this : `calSalaryObject.BaseSalary('Employees Name');`
```sh
calSalaryObject.BaseSalary('Jackson West');
```
At this case the result must be : `10*20 = 200$`
### ApplyOvertime
You can calculate the salary with overtime using ApplyOvertime.

ApplyOvertime will calculate salary with apllying overtime hour but without applying salary rate.

You can use ApllyOvertime like this : `calSalaryObject.ApllyOvertime('Employees Name');`
```sh
calSalaryObject.ApllyOvertime('Jackson West');
```
At this case the result must be : `12*20 = 240$`
### ApplySalaryRate
You can calculate the salary with salary rate using ApplySalaryRate.

ApplySalaryRate will calculate salary with apllying salary rate but without applying overtime hour.

You can use ApplySalaryRate like this : `calSalaryObject.ApplySalaryRate('Employees Name');`
```sh
calSalaryObject.ApplySalaryRate('Jackson West');
```
At this case the result must be : `(10*20) + (((10*20)*25)/100) = 200 + 50 = 250$`
### AllBonusOvertime
You can calculate the salary with salary rate + overtime using AllBonusOvertime.

AllBonusOvertime will calculate salary with apllying overtime after applying salary rate..

You can use AllBonusOvertime like this : `calSalaryObject.AllBonusOvertime('Employees Name');`
```sh
calSalaryObject.AllBonusOvertime('Jackson West');
```
At this case the result must be : `(12*20) + (((10*20)*25)/100) = 200 + 50 = 290$`
### AllBonusRate
You can calculate the salary with overtime + salary rate using AllBonusRate.

AllBonusRate will calculate salary with apllying overtime after applying salary rate..

You can use AllBonusRate like this : `calSalaryObject.AllBonusRate('Employees Name');`
```sh
calSalaryObject.AllBonusRate('Jackson West');
```
At this case the result must be : `(12*20) + (((12*20)*25)/100) = 200 + 50 = 300$`
<h4>I also put test.js file with all example in it, You can also check it out.</h4>

## License
Distributed under the **ISC** License.

## Credit
Hassan Sedaghati [@CHATi](https://github.com/chati74)
