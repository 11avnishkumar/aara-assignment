import React, { createContext, useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getProfileData } from "../components/utils/getProfileData";
import { Outlet } from "react-router-dom";
const GlobalContext = createContext();
const ProfileContext = () => {
  const navigate = useNavigate();
  const [profileData, setProfileData] = useState(null); // set profile data globally
  const getToken = localStorage.getItem("login_token");
  useEffect(() => {
    if (getToken === null) {
      navigate("/");
      // Navigate to home page if the toke is not found
    } else {
      const fetchProfileData = async () => {
        try {
          setProfileData(await getProfileData(getToken));
        } catch (error) {
          console.log(error.message);
        }
      };
      fetchProfileData();
    }
  }, []);

  // This is used to call the setProfile again to once the profile of the user updated
  // it will re-render the component and set the data globally
  const updatedGlobalProfile = async () => {
    setProfileData(await getProfileData(getToken));
  };

  // logout
  const logOut = () => {
    localStorage.removeItem("login_token");
    navigate("/");
  };

  return (
    <GlobalContext.Provider
      value={{
        getToken,
        profileData,
        setProfileData,
        updatedGlobalProfile,
        logOut,
      }}
    >
      <Outlet />
    </GlobalContext.Provider>
  );
};
export const useGLobalContext = () => {
  return useContext(GlobalContext);
};
export default ProfileContext;
