import axios from 'axios';

export default axios.create({
  baseURL: 'https://www.digikala.com/front-end/',
  headers: {
    token: 'mpfKW9ghVTCSuBZ7qTkSmEyvL38ShZxv',
  },
});
