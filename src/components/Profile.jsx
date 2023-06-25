import { UserCircleIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { useGLobalContext } from "../context/ProfileContext";
export default function Profile() {
  const { profileData } = useGLobalContext();

  return (
    <div className="mt-20 max-w-xl mx-auto px-10 md:px-0 mb-4">
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Profile
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="col-span-full">
              <div className="mt-2 flex justify-center items-center gap-x-3">
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
          className="rounded-md bg-indigo-600 px-3 py-2 text-md font-semibold text-white  hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 "
        >
          Edit Profile
        </Link>
      </div>
    </div>
  );
}
