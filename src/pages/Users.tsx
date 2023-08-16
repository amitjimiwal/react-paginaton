import React, { useState } from "react";
import useData from "../lib/useData";
import User from "../Components/User";
import Pagination from "../Components/Pagination";
import { userInterface } from "../interface/userInterface";

const Users: React.FC = () => {
  const [current_page, setcurrentPage] = useState<number>(1);
  const { users, loading, totalpages } = useData(
    `https://reqres.in/api/users?page=${current_page}`
  );
  const handleCurrentPage = (pagenumber: number) => {
    setcurrentPage(pagenumber);
  };
  return (
    <div className="w-full">
      Users Page
      {loading ? (
        <div> Loading Data...</div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-items-center mt-9">
            {users?.map((user: userInterface) => (
              <User
                id={user.id}
                first_name={user.first_name}
                last_name={user.last_name}
                email={user.email}
                avatar={user.avatar}
                key={user.id}
              />
            ))}
          </div>
          <div className="my-6">
            <Pagination totalpages={totalpages} setPage={handleCurrentPage} currentpage={current_page}/>
          </div>
        </>
      )}
    </div>
  );
};

export default Users;
