import UserItem from "./UserItem";
import { Box, Grid } from "@mui/material";

const Users = ({ data, loading }) => {
  return (
    <Box sx={{ padding: "0 5rem " }}>
      <Grid container>
        {data.map((user) => (
          <Grid item>
            <UserItem user={user} key={user.id} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Users;
