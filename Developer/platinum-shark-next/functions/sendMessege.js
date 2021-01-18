import Axios from 'axios';

const sendMessege = async (body) => {
  try {
    const response = await Axios.post('http://localhost:3000/api/email', body);
    return response;
  } catch (err) {
    console.error(err);
  }
};

export default sendMessege;
