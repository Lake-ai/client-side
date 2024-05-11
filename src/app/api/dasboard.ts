import axios from "axios";

export const getTrainingDataByID = async (token: string) => {
  try {
    console.log(token)
    const response = await axios.get(
      'http://localhost:8001/api/v0.1/addAiTrainingModel',
      {
        headers: {
            authorization: `Bearer ${token}`
        }
      }
    );

    return response;
  } catch (error) {
    // Handle error
    console.error('Error:', error);
    throw error;
  }
};
