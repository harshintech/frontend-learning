type Employee = {
  id: number;
  name: string;
};

type Manager = {
  department: string;
  role: string;
};

type ManagerWithEmployeeInfo = Employee & Manager;

const manager: ManagerWithEmployeeInfo = {
  id: 123,
  name: "Harsh Gohil",
  department: "Engineerinng",
  role: "Team Lead",
};

console.log(manager.id);
console.log(manager.name);
console.log(manager.department);
console.log(manager.role);
