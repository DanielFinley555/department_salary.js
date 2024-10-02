//Task 1: Create a Department Structure


const company = {
    departments: [
        {
            departmentName: 'Baseball Section',
            employees: [
                {
                    name: 'Jake',
                    salary: 100000,
                    subordinates: [
                        {
                            name: 'Anthony',
                            salary: 80000,
                            subordinates: [
                                {
                                    name: 'Jon',
                                    salary: 60000,
                                    subordinates: []
                                }
                            ]
                        }
                    ]
                },
                {
                    name: 'Wilson',
                    salary: 90000,
                    subordinates: []
                }
            ]
        },
        {
            departmentName: 'Hockey Section',
            employees: [
                {
                    name: 'Connor',
                    salary: 85000,
                    subordinates: [
                        {
                            name: 'Patrick',
                            salary: 70000,
                            subordinates: []
                        }
                    ]
                },
                {
                    name: 'Brent',
                    salary: 95000,
                    subordinates: []
                }
            ]
        }
    ]
};



//Task 2: Create a Recursive Function to Calculate Total Salary for a Department
//i = the department, x = the employees

function calculateDepartmentSalary(i) {
    let departmentTotalSalary = 0;

    //Firstly calculating the entire total salary
    for (let x of i.employees) {
        departmentTotalSalary += x.salary;

    //Recursively calculate the total salory of the subordinates for all the employees aswell
    for (let subordinate of x.subordinates) {
        departmentTotalSalary += calculateDepartmentSalary({employees: [subordinate]});
    }
}

    return departmentTotalSalary;
}

//Calculating the total salary's for the entire Baseball Section Department
const b = company.departments.find(departments => departments.departmentName === "Baseball Section");
const bSalary = calculateDepartmentSalary(b);

console.log(`Total salary for the Baseball Section department: $${bSalary}`);
