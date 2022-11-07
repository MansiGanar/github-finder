import React from "react";
import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "./layout/Navbar";
import Users from "./layout/users/Users";
import Search from "./layout/users/Search";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingleUser from "./layout/users/SingleUser";

const App = () => {
  const [data, setData] = useState([]);
  const [user, setUser] = useState({});

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get("https://api.github.com/users");
      setData(response.data);
    };
    getData();
    getSingleUser();
    // eslint-disable-next-line
  }, []);

  const searchUsers = async (search) => {
    const response = await axios.get(
      `https://api.github.com/search/users?q=${search}`
    );
    console.log(response.data);
    setData(response.data.items);
    console.log(data);
  };

  const clearUsers = () => {
    setData([]);
  };

  const getSingleUser = async (username) => {
    const response = await axios.get(
      `https://api.github.com/users/${username}`
    );
    setUser(response.data);
    console.log(user);
  };

  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Search searchUsers={searchUsers} clearUsers={clearUsers} />
                <Users data={data} />
              </>
            }
          />
          <Route
            path="/user/:login"
            element={<SingleUser getSingleUser={getSingleUser} user={user} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
