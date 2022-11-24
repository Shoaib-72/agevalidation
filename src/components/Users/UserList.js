import React from "react";
import Card from "../UI/Card";
import classes from "./UserList.module.css";
const UserList = (props) => {
  return (
    <div>
        <Card className={classes.users}>
      <ul>
        {props.users.map((user) => {
          return (
            <li>
              {user.name} {user.age} years old
            </li>
          );
        })}
      </ul>
      </Card>
    </div>
  );
};
export default UserList;
