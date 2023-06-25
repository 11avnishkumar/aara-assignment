import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
export default function Profile() {
  const [profileData, setProfileData] = useState(null);

  const navigate = useNavigate();
  useEffect(() => {
    const getToken = localStorage.getItem("login_token");

    if (getToken === null) navigate("/"); // Navigate to home page if the toke is not found

    const getProfileData = async () => {
      try {
        const getProfile = await axios.get(
          "https://storebh.bhaaraterp.com/api/my-profile/",
          {
            headers: {
              Token: getToken,
              "Content-Type": "application/json",
            },
          }
        );
        // destructer the useFul data
        const {
          data: {
            data: { profile_data },
          },
        } = getProfile;
        setProfileData(profile_data);
      } catch (error) {
        console.log(error);
      }
    };
    getProfileData();
  }, []);
  console.log(profileData);
  return (
    <div className="mt-20 max-w-xl mx-auto">
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Profile
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="col-span-full">
              <div className="mt-2 flex items-center gap-x-3">
                {!profileData?.[0].profile_picture ? (
                  <UserCircleIcon
                    className="h-12 w-12 text-gray-300"
                    aria-hidden="true"
                  />
                ) : (
                  <img
                    src={profileData[0].profile_picture}
                    alt={profileData[0].first_name}
                  />
                )}
                <div className="mt-4 flex text-sm leading-6 text-gray-600">
                  <label
                    htmlFor="photo"
                    className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                  >
                    <span>Change</span>
                    <input
                      id="photo"
                      name="photo"
                      type="file"
                      className="sr-only"
                    />
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Personal Information
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            Use a permanent address where you can receive mail.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                First name
              </label>
              <div className="mt-2">
                <span className="block w-full rounded-md  py-1.5 text-gray-900   ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-0 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                  {profileData?.[0].first_name}
                </span>
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="last-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Last name
              </label>
              <div className="mt-2">
                <span className="block w-full rounded-md  py-1.5 text-gray-900   ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-0 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                  {profileData?.[0].last_name}
                </span>
              </div>
            </div>

            <div className="sm:col-span-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <span className="block w-full rounded-md  py-1.5 text-gray-900   ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-0 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                  {profileData?.[0].email}
                </span>
              </div>
            </div>

            <div className="sm:col-span-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Phone number
              </label>
              <div className="mt-2">
                <span className="block w-full rounded-md  py-1.5 text-gray-900   ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-0 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                  {profileData?.[0].mobile_no}
                </span>
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="gender"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Gender
              </label>
              <div className="mt-2">
                <span className="block w-full rounded-md  py-1.5 text-gray-900   ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-0 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                  {profileData?.[0].gender}
                </span>
              </div>
            </div>

            <div className="sm:col-span-2 sm:col-start-1">
              <span className="block text-sm font-medium leading-6 text-gray-900">
                Date of Birth
              </span>
              <div className="mt-2">
                <span className="block w-full rounded-md  py-1.5 text-gray-900   ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-0 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                  {profileData?.[0].date_of_birth}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <Link
          to={"/update-profile"}
          className="rounded-md bg-indigo-600 px-3 py-2 text-lg font-semibold text-white  hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Edit Profile
        </Link>
      </div>
    </div>
  );
}
