import React from "react";
import { useParams } from "react-router-dom";
import useData from "../lib/useData";
import User from "../Components/User";
import { userInterface } from "../interface/userInterface";

const UserInformation: React.FC = () => {
  const { id } = useParams();
  const { users, loading } = useData(`https://reqres.in/api/users/${id}`);
  return (
    <div>
      Userinfo
      {loading ? (
        <div> Loading Data...</div>
      ) : (
          <User
            id={users?.id}
            first_name={users?.first_name}
            last_name={users?.last_name}
            email={users?.email}
            avatar={users?.avatar}
            key={users?.id}
          />
      )}
    </div>
  );
};

export default UserInformation;
