"use client";
import { useState, useEffect } from "react";
import Form from "./components/Form";
import Table from "./components/Table";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState([]);
  const [refresh, setRefresh] = useState();
  const [isVisible, setVisible] = useState(false);
  const [selectedRows, setSelectedRows] = useState([]);

  //use this to send email by user's input mail
  // const [email, setEmail] = useState("");
  // const [emailError, setEmailError] = useState("");

  const HOST_URL = "http://localhost:5000/api/";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${HOST_URL}`);
        // console.log(res.data);
        setData(res.data);
        setRefresh(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [refresh]);

  const handleDelete = (userID) => {
    axios.delete(`${HOST_URL}/delete/${userID}`);
  };

  const handleUpdate = (userID) => {
    console.log("function disabled by developer!");
    alert("Function disabled by developer!");
  };

  const handleSelect = (selected) => {
    setSelectedRows(selected);
  };

  const handleSend = async () => {
    if (selectedRows.length === 0) {
      alert("Please select at least one user before sending the email.");
      return;
    }

    // if (!email.trim()) {
    //   setEmailError("Email is required");
    //   return;
    // }

    try {
      // setEmailError(""); // Clear the error if email is provided
      // await axios.post(`${HOST_URL}send`, { selectedRows, email });

      // setEmail("");
      // console.log("Email sent successfully!", { selectedRows});

      const sendRows = await axios.post(`${HOST_URL}send`, { selectedRows });
      alert("Email sent Successfully! Check your mail.");
      setSelectedRows([]);
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  return (
    <div className="p-4 flex flex-col justify-center items-center">
      <div className="flex gap-4">
        <button
          onClick={() => setVisible(!isVisible)}
          className="bg-blue-500 w-36 mb-5 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add New Data
        </button>

        {/* User's input mail  */}

        {/* <div className="mt-2">
          <span className="mr-2">
            Enter your email to send selected users' data to info@redpositive.in
          </span>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border-solid border-black border-2"
          />
          {emailError && <p className="text-red-500">{emailError}</p>}
        </div> */}

        <button
          onClick={handleSend}
          className="bg-blue-500 w-36 mb-5 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Send
        </button>
      </div>
      {isVisible ? (
        <div className="bg-yellow-100 backdrop-blur-lg w-full h-full p-10 flex justify-center items-center">
          <Form
            // fetching and updating data of table without refreshing the page
            refresh={(refresh) => {
              setRefresh(refresh);
              setVisible(!isVisible);
            }}
          />
        </div>
      ) : (
        <Table
          refresh={(refresh) => setRefresh(refresh)}
          data={data}
          onDelete={handleDelete}
          onUpdate={handleUpdate}
          onSelect={handleSelect}
        />
      )}
    </div>
  );
};

export default Home;
