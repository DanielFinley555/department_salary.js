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
