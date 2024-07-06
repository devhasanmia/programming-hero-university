console.clear();
const adminPaths2 = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: "<AdminDashboard />",
  },
  {
    name: "User Management",
    children: [
      {
        name: "Create Admin",
        path: "create-admin",
        element: "<CreateAdmin />",
      },
      {
        name: "Create Student",
        path: "create-student",
        element: "<CreateStudent />",
      },
      {
        name: "Create Faculty",
        path: "create-faculty",
        element: "<CreateFaculty />",
      },
    ],
  },
];

const newArr = adminPaths2.reduce((acc, cur) => {
  if (cur.path && cur.name) {
    acc.push({
      key: cur.path,
      label: "NavLink",
    });
  }
  if (cur.children) {
    acc.push({
      key: cur.name,
      label: "NavLink",
      children: cur.children.map((child) => ({
        key: child.name,
        label: "NavLink",
      })),
    });
  }
  return acc;
}, []);

console.log(JSON.stringify(newArr, ));
