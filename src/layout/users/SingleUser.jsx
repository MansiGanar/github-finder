import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Checkbox from "@mui/material/Checkbox";
import { Button, Typography, Grid, Box } from "@mui/material";

const SingleUser = ({ getSingleUser, user }) => {
  const { login } = useParams();
  useEffect(() => {
    getSingleUser(login);
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Link to="/">
        <Button
          variant="contained"
          sx={{
            textDecoration: "none",
            margin: "1rem",
          }}
        >
          Back to Search
        </Button>
      </Link>
      <Box margin={2} sx={{ border: "1px solid black" }} >
        <Grid container>
          <Grid item>
            <img
              src={user.avatar_url}
              alt="img"
              style={{
                width: "15rem",
                borderRadius: "50%",
                margin: "1rem 5rem ",
              }}
            />
          </Grid>
          <Grid item sm>
            <Grid container>
              <Grid item>
                <Typography fontSize={30}>{user.name}</Typography>
              </Grid>
              <Grid item>
                <Typography fontSize={18} p={1}>
                  Hirable:
                </Typography>
              </Grid>
              <Grid item>
                {user.hirable ? (
                  <Checkbox defaultChecked color="secondary" />
                ) : (
                  <Checkbox defaultChecked color="error" />
                )}
              </Grid>
            </Grid>

            {user.bio ? (
              <Typography fontSize={25}>Bio: {user.bio}</Typography>
            ) : (
              ""
            )}

            <Button variant={"contained"} href={user.html_url}>
              Visit Github profile
            </Button>

            {user.login ? (
              <Typography fontSize={25}>Username: {user.login}</Typography>
            ) : (
              ""
            )}

            {user.company ? (
              <Typography fontSize={25}>Company: {user.company}</Typography>
            ) : (
              ""
            )}

            {user.blog ? (
              <Typography fontSize={25}>Website: {user.blog}</Typography>
            ) : (
              ""
            )}
          </Grid>
        </Grid>
      </Box>
      <Box textAlign={"center"} margin={2} sx={{ border: "1px solid black" }}>
        <Button variant="outlined" color={"error"} sx={{ margin: "1rem" }}>
          Followers: {user.followers}{" "}
        </Button>
        <Button variant="outlined" color={"success"} sx={{ margin: "1rem" }}>
          Following: {user.following}{" "}
        </Button>
        <Button variant="outlined" color={"secondary"} sx={{ margin: "1rem" }}>
          Public Repos: {user.public_repos}{" "}
        </Button>
        <Button variant="outlined" color={"primary"} sx={{ margin: "1rem" }}>
          Followers: {user.public_gists}{" "}
        </Button>
      </Box>
    </>
  );
};

export default SingleUser;
