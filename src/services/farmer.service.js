import axios from "axios";
let baseUrl = `${process.env.REACT_APP_BASEURL}farmer`;
export const farmerService = {
  verifyDocument: async (farmerId, documentType, documentId) => {
    let response = await axios.post(`${baseUrl}/verify-document`, {
      documentType: documentType,
      documentId: documentId,
      farmerId: farmerId,
    });
    return response;
  },
};
