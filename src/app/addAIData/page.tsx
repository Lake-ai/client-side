"use client";

import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import { fetchFromUrl, getOrganizationById } from "../api/apiCall";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from 'next/navigation';
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import Prompt from "../Components/Prompt";
import { serverUrl } from "../api/serverUrl";


const urls = serverUrl({Production : true})


type AiModel = {
  organization: {
    userId:string|any;
    organizationName: string;
  };
  url: string;
  embeddingModel:string;
};
const AddAiModel = () => {
  const router = useRouter();
  const [UserId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const UserIds: string | null = localStorage.getItem('UserId');
      setUserId(UserIds);
    }
  }, []);

  //embeddingModel 

  const [isLoading, setisLoading] = useState(false);
  const [selectedOrganization, setSelectedOrganization] = useState<string>("");
  const [orgData, setOrgData] = useState<any[]>([]);
  const [File, setFile] = useState<File | null>(null);
  const [url, setUrl] = useState<string>("");
  const[embeddingModel , setEmbeddingModel] = useState<string>("OpenAI");
  const [ResourceURL, setResourceURL] = useState<string>("")
  
  const [AiModel, setAiModel] = useState<AiModel>({
    organization: {
      userId:"",
      organizationName: "",
    },
    url: "",
    embeddingModel:""
  });
  useEffect(() => {
    async function fetchData() {
      console.log(UserId)
      const result = await getOrganizationById(UserId);
      if (result && result.response && result.response.data) {
        setOrgData(result.response.data);
      }
    }

    fetchData();
  }, [UserId]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.item(0);
    if (selectedFile && selectedFile.type === 'text/plain' || "application/pdf" || "text/csv") {
      const file = e.target.files?.item(0);
      if (file) {
        setFile(file);
      }else{
        setResourceURL(e.target.value)
      }
    }
    else{
      toast.error("Only txt, pdf or csv files are allowed!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
  console.log(ResourceURL)

  useEffect(() => {
    // Update AiModel when selectedOrganization or url changes
    setAiModel({
      organization: {
        organizationName: selectedOrganization,
        userId: UserId
      },
      url: url,
      embeddingModel: embeddingModel
    });
  }, [selectedOrganization, url, UserId,embeddingModel]);

  const fetchFile = async () => {
    try {
      let formData;
      let postData;
      let res;
      if (File) {
        formData = new FormData();
        formData.append("file", File);
        res = await axios.post(
          urls + "/api/v0.1/upload",
          formData
        );
      } else {
        postData = {
          resource_url: setResourceURL,
        };
        res = await axios.post(
          urls + "/api/v0.1/upload/url",
          postData
        );
      }
  
  
      toast("Successfully, Submitted !", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      console.log({res})
      // Returning the response from the server
      setUrl(res.data?.data.url)
      return res.data;
    } catch (err) {
      toast.error("Oops something went wrong!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      console.error(err);
      return null;
    }
  };
  
  const SubmitAiModel = async () => {
    const res = await axios.post(
      urls + "/api/v0.1/addAiTrainingModel",
      AiModel
    );
  };
  console.log(AiModel)

  const handleFileSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const success = await fetchFile();
    if (success) {
      toast("File Submmited !", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      toast.error("File not Submitted !", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setisLoading(true)
    await SubmitAiModel()
      .then((res) => {
        toast("Ai Model Created !", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        console.log(res)
        router.push('/dashboard')
      })
      .catch((err) => {
        toast.error("Failed Training", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        console.log(err);
      });
      setisLoading(false)
  };
  
  const isFormFilled = Boolean(File) && Boolean(selectedOrganization);
  return (
    <>
        <Navbar />
        {
          UserId?(
            isLoading?(
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white z-20">
              <AiOutlineLoading3Quarters className="animate-spin text-6xl" />
              </div>
            ):(
              <div className="sm:pt-24 pt-44 top-0 left-0 w-full h-full flex items-center justify-center bg-opacity-50">
              <div className="p-8 bg-white rounded-lg shadow-xl w-96 bg-opacity-10">
                <h2 className="text-xl mb-4 font-bold">Train Data</h2>
    
                <form>
                  {/* File Upload */}
                  <label className="block text-sm font-medium mb-2">
                    URL Link:
                  </label>
                  <input
                    onChange={handleFileChange}
                    type="text"
                    className="mt-1 w-full px-4 py-2 rounded-md border bg-opacity-50 bg-pink-50 border-gray-300 focus:outline-none focus:border-indigo-500"
                  />
                  <label className="block text-sm font-medium mb-2">
                    Upload File:
                  </label>
                  <input
                    onChange={handleFileChange}
                    type="file"
                   
                    accept=".txt, .pdf, .csv"
                    className="mb-4 p-2 file:bg-pink-300 file:rounded-xl file:active:bg-pink-400 file:shadow-lg file:border-pink-600"
                  />
                  
                  <button
                    onClick={handleFileSubmit}
                    className="bg-pink-700 active:bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600"
                  >
                    Add File
                  </button>
                  {/* Organization Selection */}
                  <label className="block text-sm font-medium mb-2">
                    Select Organization:
                  </label>
                  <select
                    value={selectedOrganization}
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                      setSelectedOrganization(e.target.value)
                    }
                    className="mb-4 border p-2 rounded w-full bg-pink-200"
                  >
                    <option disabled value="">
                      -- Select Organization --
                    </option>
                    {orgData &&
                      orgData.map(
                        (
                          value: { OrganizationName: string },
                          index: React.Key | null | undefined
                        ) => (
                          <option key={index} value={value.OrganizationName}>
                            {value.OrganizationName}
                          </option>
                        )
                      )}
                  </select>
                  <label className="block text-sm font-medium mb-2">Select a model.</label>
                  <select onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                      setEmbeddingModel(e.target.value)
                    } className="mb-4 border p-2 rounded w-full bg-pink-200">
                   
                    <option value="OpenAI">Open AI</option>
                    <option value="Gemini">Gemini AI</option>
                  </select>
                  <div className="mb-4">
            </div>
                  <button
                    type="submit"
                    onClick={handleSubmit}
                    className={`bg-pink-700 active:bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 ${
                      !isFormFilled && "opacity-50 cursor-not-allowed"
                    }`}
                    disabled={!isFormFilled}
                  >Submit
                  </button>
                </form>
              </div>
            </div>
            )
          ):(
            <Prompt/>
          )
        }
    </>
  );
};

export default AddAiModel;
