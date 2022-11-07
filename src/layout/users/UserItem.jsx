import React from "react";
import { Typography, Box, Button } from "@mui/material";
import { Link } from "react-router-dom";

const UsersList = ({ user }) => {
  return (
    <>
      <Box
        style={{
          padding: "2rem",
          margin: "2rem",
          border: "1px solid black",
          width: "12rem",
          textAlign: "center",
        }}
      >
        <img
          src={user.avatar_url}
          alt="img"
          style={{
            width: "8rem",
            borderRadius: "50%",
            justifyContent: "center",
          }}
        />
        <Typography>{user.login}</Typography>
        <Link to={`/user/${user.login}`}>
          <Button variant="outlined">More</Button>
        </Link>
      </Box>
    </>
  );
};

export default UsersList;
