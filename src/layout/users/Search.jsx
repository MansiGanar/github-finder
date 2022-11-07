import React, { useState } from "react";
import { TextField, Button, Box, Grid } from "@mui/material";

const Search = ({ searchUsers, clearUsers }) => {
  const [search, setSearch] = useState("");

  const onChange = (e) => {
    setSearch(e.target.value);
  };

  const onsubmit = (e) => {
    e.preventDefault();
    searchUsers(search);
    console.log(search);
  };

  return (
    <>
      <Box>
        <Grid container padding={"0 5rem"}>
          <Grid item sm={8} padding={"1rem"}>
            <TextField
              fullWidth
              id="outlined-basic"
              variant="outlined"
              placeholder="Search"
              onChange={onChange}
              value={search}
              name="search"
            />
          </Grid>
          <Grid item sm={2} padding={"1rem 0"}>
            <Button
              type="submit"
              onClick={onsubmit}
              variant="contained"
              sx={{
                width: "13rem",
                height: "3.4rem",
                color: "black",
                background: "#CDF5EC",

                ":hover": { background: "#104F55", color: "white" },
              }}
            >
              Search
            </Button>
          </Grid>
          <Grid item sm={2} padding={"1rem 0"}>
            <Button
              type="submit"
              onClick={clearUsers}
              fullWidth
              variant="contained"
              color="error"
              sx={{
                width: "13rem",
                height: "3.4rem",
                color: "black",
                background: "#FFC2CE",
                ":hover": { background: "#96001E", color: "white" },
              }}
            >
              Clear
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Search;
