import axios from 'axios';

async function getData(data, page) {
  const apiData = await axios.get(
    `https://pixabay.com/api/?key=31321520-a449ef359707c8e5cdb01953a&q=${data}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=40`
  );
  return apiData;
}

export default { getData };
