import axios from "axios";
export const getProfileData = async (getToken) => {
  try {
    const response = await axios.get(
      "https://storebh.bhaaraterp.com/api/my-profile/",
      {
        headers: {
          Token: getToken,
        },
      }
    );
    // destructer the useFul data
    const {
      data: {
        data: { profile_data },
      },
    } = response;
    return profile_data;
  } catch (error) {
    console.log(error);
  }
};
