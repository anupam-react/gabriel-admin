import { Link, useNavigate } from "react-router-dom";
import "./index.css";
const RegisterForm1 = ({
  isLogin,
  userName,
  setUserName,
  email,
  setEmail,
  phone,
  setPhone,
  password,
  setPassword,
  confirmPassword,
  setConfirmPassword,
  showPassword,
  showCpassword,
  isChecked,
  handleCheckboxChange,
  handleLogin,
  handleRegister,
  togglePasswordVisibility,
  toggleCPasswordVisibility,
}) => {
  const responseMessage = (response) => {
    console.log(response);
  };
  const errorMessage = (error) => {
    console.log(error);
  };
  const navigate = useNavigate();
  const categoryOptions = [
    { option: "Shopping & Fashion", value: "shopping" },
    { option: "Food and Drink", value: "food" },
    { option: "Arts & Entertainment", value: "arts" },
    { option: "Finance & Banking", value: "finance" },
    { option: "Fitness", value: "fitness" },
    { option: "Health & Beauty", value: "health" },
    { option: "Travel & Hotels", value: "travel" },
  ];
  const subCategoryOptions = [
    { option: "Electronics", value: "electronics" },
    { option: "Home and Garden", value: "home" },
    { option: "Sporting Goods", value: "sports" },
    { option: "Books and Stationery", value: "books" },
    { option: "Jewellery", value: "jewellery" },
    { option: "Pet Supplies", value: "pet" },
    { option: "Furniture", value: "furniture" },
    { option: "Books & Comic Book Shops", value: "shops" },
    { option: "Speciality Food Stores", value: "food" },
    { option: "Boutique Wine and Spirits", value: "wine" },
    { option: "Craft and Hobby Store", value: "hobby" },
  ];
  return (
    <div className="flex justify-center items-center h-[100vh] w-full">
      <div className="w-2/6 px-4 bg-white border z-50 border-gray-200 rounded shadow-xl sm:p-6 md:p-6 dark:bg-gray-800 dark:border-gray-700">
        <div className="flex flex-col items-center mb-10  gap-2">
          <img src="./image 2 (2).svg" alt="" className="w-36 h-18 pb-4" />
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div
              className=" h-2.5 rounded-full progress"
              style={{ width: "36%" }}
            ></div>
          </div>
          <p className="font-bold text-2xl">New Registration!</p>
          <p className="text-gray-500">
            Please provide the following Information to Continue!
          </p>
        </div>
        <form
          className="space-y-4 h-64 p-4 overflow-auto bg-gray-100"
          action="#"
        >
          <>
            <div className="relative">
              <img
                src="./Mask group.svg"
                alt=""
                className="w-5 h-6 absolute top-2 left-2"
              />
              <input
                type="text"
                name="name"
                id="name"
                style={{ color: "#0070BC" }}
                placeholder="Full Name"
                className="rounded shadow-md border-none text-sm block w-full pl-10 p-2.5 "
                required
                // value={password}
                // onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="relative">
              <img
                src="./image 32.svg"
                alt=""
                className="w-5 h-6 absolute top-2 left-2"
              />
              <input
                type="text"
                name="phone"
                id="phone"
                style={{ color: "#0070BC" }}
                placeholder="Contact Number"
                className="rounded shadow-md border-none text-sm block  w-full pl-10 p-2.5 "
                required
                // value={password}
                // onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="relative">
              <img
                src="./image 33.svg"
                alt=""
                className="w-5 h-6 absolute top-2 left-2"
              />
              <input
                type="text"
                name="email"
                id="email"
                style={{ color: "#0070BC" }}
                placeholder="Email Address"
                className="rounded shadow-md border-none text-sm block  w-full pl-10 p-2.5 "
                required
                // value={password}
                // onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="relative">
              <img
                src="./image 34.svg"
                alt=""
                className="w-5 h-6 absolute top-2 left-2"
              />
              <input
                type="password"
                name="password"
                id="password"
                style={{ color: "#0070BC" }}
                placeholder="New Password"
                className="rounded shadow-md border-none text-sm block  w-full pl-10 p-2.5 "
                required
                // value={password}
                // onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="relative">
              <img
                src="./image 35.svg"
                alt=""
                className="w-5 h-6 absolute top-2 left-2"
              />
              <input
                type="password"
                name="confirmPass"
                id="confirmPass"
                style={{ color: "#0070BC" }}
                placeholder="Re - Enter Password"
                className="rounded shadow-md border-none text-sm block  w-full pl-10 p-2.5 "
                required
                // value={password}
                // onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <p className="text-xl font-bold text-center">Select Categories</p>
            <p className="text-sm text-center">
              Please provide the following Information to Continue!
            </p>
            <div className="custom-select">
              <select
                id="countries"
                className="rounded shadow-md text-gray-900 text-sm  border-none block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option disabled selected>Categories</option>
                {categoryOptions?.map((data, i) => (
                  <>
                    <option key={i} value={data?.value}>{data?.option}</option>
                  </>  
                ))}
              </select>
            </div>
            <p className="text-xl font-bold text-center">Select Sub-Categories</p>
            <p className="text-sm text-center">
              Please provide the following Information to Continue!
            </p>
            <div className="custom-select">
              <select
                id="countries"
                className="rounded shadow-md text-gray-900 text-sm  border-none block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected disabled>subcategories</option>
                {subCategoryOptions?.map((data, i) => (
                  <>
                    <option className="font-semibold"  key={i} value={data?.value}>{data?.option}</option>
                  </>
                  
                ))}
              </select>
            </div>
          </>
        </form>
        <div className="flex justify-between items-center mt-6">
          <div className="flex justify-center">
            <button className="sign-button" onClick={()=>navigate('/documents')}>CONTINUE</button>
          </div>
          <div className="flex items-center gap-2 cursor-pointer" onClick={()=>navigate('/login')}>
            <img src="./Mask group (4).svg" alt="" className="w-6 h-6" />
            <p className="text-sm cancel underline" >Cancel</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm1;
