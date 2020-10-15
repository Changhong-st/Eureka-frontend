import axiosInstance from './axiosInstance';

export default function getTaskList(filter) {
  const filterKeyArray = filter && Object.keys(filter);

  const filteredConfig = filterKeyArray && filterKeyArray
    .filter((key) => filter[key]);

  if (!filteredConfig) return axiosInstance.get('/tasks');

  const urlConfig = filteredConfig.reduce((url, key, index) => (
    index === filteredConfig.length - 1
      ? `${url}${key}=${filter[key]}`
      : `${url}${key}=${filter[key]}&`
  ), '?');

  return axiosInstance.get(`/tasks/${urlConfig}`);
}
