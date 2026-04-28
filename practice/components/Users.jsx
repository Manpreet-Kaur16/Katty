import { useState, useEffect } from "react";
function Users() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    async function getuser() {
      try {
        const apiResponse = await fetch(
          `https://api.freeapi.app/api/v1/public/randomusers?limit=5
          &&page=${page}`,
        );
        let userData = await apiResponse.json();
        console.log(userData);
        console.log(apiResponse);
        setUsers(userData.data.data);
      } catch (error) {
        console.log(error);
      }
    }
    getuser();
  }, [page]);

  function backButtonClick() {
    console.log("you clicked Back button");

    if (page > 1) {
      setPage(page - 1);
    }
  }

  function nextButtonClick() {
    setPage(page + 1);
    console.log("you clicked Next button");
  }
  function resetButtonClick() {
    setPage(1);
  }

  return (
    <div className=" bg-slate-100">
      <div className="max-w-[600px] mx-auto">
        <div className="flex justify-between py-6">
          <button
            className="bg-gray-500 text-white rounded-xl px-2 py-1"
            onClick={backButtonClick}
          >
            Back
          </button>
          <p>
            CurrentPage Number:{page}
            <button
              className="bg-red-400 text-white rounded-xl px-2 py-1"
              onClick={resetButtonClick}
            >
              Reset
            </button>
          </p>
          <button
            className="bg-blue-500 text-white rounded-xl px-2 py-1"
            onClick={nextButtonClick}
          >
            Next
          </button>
        </div>
        <h1>Users List</h1>
        {users.map((user, index) => (
          <div className="bg-white border border-gray-200 px-2 py-1 mt-2">
            <div className="flex gap-2">
              <div className="flex items-center">
                <img src={user.picture.thumbnail} className="rounded-full" />
              </div>
              <div>
                <h3>
                  {user.name.first} {user.name.last}
                </h3>
                <p>{user.email}</p>
                <p>{user.location.city}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Users;
