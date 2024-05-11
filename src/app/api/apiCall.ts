import axios from "axios";
import { serverUrl } from "./serverUrl";


const url = serverUrl({Production : true})
export const getOrganizationById = async (UserId: string | null) => {
  const res = await axios.get(
    url + `/api/v0.1/newOrganization`,
    {
      params: { UserId: UserId },
    }
  );

  return res.data;
};

export const getAiModelById = async (UserId: string | null) => {
  const res = await axios.get(
    url + `/api/v0.1/addAiTrainingModel`,
    {
      params: { UserId: UserId },
    }
  );

  return res.data;
};

type organization = {
  OrganizationName: string;
  OrganizationWebsite: string;
  organizationEmail: string;
  OrganizationPhone: string;
  isActive: boolean;
};

export const addOrganization = async (Organization: organization) => {
  const data = await axios.post(
    url + "/api/v0.1/newOrganization",
    Organization
  );

  return data;
};
type user = {
  UserName: string;
  Password: string;
};
export const fetchFromUrl = async(urls : string)=>{
  const data = await axios.post(url + "/api/v0.1/upload",
    {
      resource_url : urls
    }
    
  )
  console.log(data)
  return data;
}
export const Auth = async (User: user) => {
  const data = await axios.post(url + "/signin", User);

  console.log(data)

  return data;
};
type users = {
  UserName: string;
  UserEmail: string;
  Password: string;
};
export const SignUp = async (User: users) => {
  const data = await axios.post(url + "/signup", User);

  return data;
};


