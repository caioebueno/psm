import Axios from 'axios';

const sendMessege = async (body) => {
  try {
    const response = await Axios.post('https://p-s-m.co/api/email', body);
    return response;
  } catch (err) {
    console.error(err);
  }
};

export default sendMessege;
