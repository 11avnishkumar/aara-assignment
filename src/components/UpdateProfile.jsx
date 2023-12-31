import { UserCircleIcon } from "@heroicons/react/24/solid";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useGLobalContext } from "../context/ProfileContext";
export default function UpdateProfile() {
  const { getToken, profileData, updatedGlobalProfile } = useGLobalContext();
  const navigate = useNavigate();
  useEffect(() => {
    if (getToken === null) navigate("/"); // Navigate to home page
  }, []);

  // collect form data
  const [firstName, setFirstName] = useState(profileData?.[0].first_name || "");
  const [lastName, setLastName] = useState(profileData?.[0].last_name || "");
  const [profilePhoto, setProfilePhoto] = useState(
    profileData?.[0].profile_picture || null
  );
  const [email, setEmail] = useState(profileData?.[0].email || "");
  const [gender, setGender] = useState(profileData?.[0].gender || "");
  const [dateOfBirth, setDateOfBirth] = useState(
    profileData?.[0].date_of_birth || ""
  );

  // handle Profile submitt
  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("first_name", firstName);
    formData.append("last_name", lastName);
    formData.append("email", email);
    formData.append("gender", gender);
    formData.append("date_of_birth", dateOfBirth);
    formData.append("profile_picture", profilePhoto);
    try {
      const res = await axios.post(
        "https://storebh.bhaaraterp.com/api/update-profile/",
        formData,
        {
          headers: {
            Token: getToken,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (res.data.status !== "") {
        updatedGlobalProfile(); // update the profile
        toast.success(res.data.status);
        navigate("/profile");
      } else {
        throw new Error(res.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <form className="mt-20 max-w-xl mx-auto px-10 md:px-0 mb-4">
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
                    className="h-48 w-48 text-gray-300"
                    aria-hidden="true"
                  />
                ) : (
                  <div className="h-48 w-48 overflow-hidden rounded-full">
                    <img
                      src={profileData[0].profile_picture}
                      alt={profileData[0].first_name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                )}
                <div className="mt-4 flex justify-center items-center text-sm leading-6 text-gray-600">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer rounded-md  bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                  >
                    <span className="">Change</span>
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      onChange={(e) => setProfilePhoto(e.target.files[0])}
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

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                First name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="first-name"
                  value={firstName}
                  id="first-name"
                  autoComplete="given-name"
                  onChange={(e) => setFirstName(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
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
                <input
                  type="text"
                  value={lastName}
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  onChange={(e) => setLastName(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
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
                <input
                  id="email"
                  name="email"
                  value={email}
                  type="email"
                  autoComplete="email"
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
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
                <select
                  id="gender"
                  name="gender"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="others">Others</option>
                </select>
              </div>
            </div>

            <div className="sm:col-span-2 sm:col-start-1">
              <label
                htmlFor="date_of_birth"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Date of Birth
              </label>
              <div className="mt-2">
                <input
                  type="date"
                  name="date_of_birth"
                  value={dateOfBirth}
                  id="date_of_birth"
                  autoComplete="address-level2"
                  onChange={(e) => setDateOfBirth(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="button"
          onClick={handleUpdateProfile}
          className="rounded-md bg-indigo-600 w-48 px-3 py-2 text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </form>
  );
}
