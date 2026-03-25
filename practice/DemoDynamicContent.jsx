function DemoDynamicContent() {
  const users = [
    {
      id: 1,
      name: "Manpreet",
      email: "mani@gmai.com",
      age: 34,
      city: "Sangrur",
    },
    {
      id: 2,
      name: "Harpreet",
      email: "hani@gmai.com",
      age: 30,
    },
    {
      id: 3,
      name: "Aman",
      email: "aman@gmai.com",
      age: 34,
      city: "Patiala",
    },
    {
      id: 4,
      name: "Anusika",
      email: "anu@gmai.com",
      age: 34,
      city: "woodstock",
    },
  ];

  return (
    <div>
      {users.map((users, index) => {
        return (
          <div className="px-10 border border-t" key={index}>
            <h1>{users.name}</h1>
            <h1>{users.email}</h1>
            <h1>{users.age}</h1>
            <h1>{users.city}</h1>
          </div>
        );
      })}
    </div>
  );
}

export default DemoDynamicContent;
