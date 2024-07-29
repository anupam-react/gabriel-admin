import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createApiData, fetchApiData } from "../utiils";

const useAccount = () => {
  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("Staff");
  const [employeeId, setEmployeeId] = useState("");
  const [staff, setStaff] = useState([]);
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();

  async function getStaffByToken() {
    const data = await fetchApiData(
      "https://gabriel-backend.vercel.app/api/v1/Staff/getStaffByToken"
    );
    setStaff(data?.data);
  }

  useEffect(() => {
    getStaffByToken();
  }, []);

  const handleAddStaff = async (event) => {
    event.preventDefault();
    const formData = {
      firstName: fname,
      lastName: lname,
      email,
      phone,
      employeeId,
      Staff: role,
    };

    try {
      const response = await createApiData(
        "https://gabriel-backend.vercel.app/api/v1/Staff/addStaff",
        formData
      );

      console.log(response?.data);
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 2000);
      getStaffByToken();
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  return {
    fname,
    setFName,
    lname,
    setLName,
    email,
    setEmail,
    role,
    setRole,
    phone,
    setPhone,
    employeeId,
    setEmployeeId,
    staff,
    success,
    setSuccess,
    handleAddStaff,
  };
};

export default useAccount;
