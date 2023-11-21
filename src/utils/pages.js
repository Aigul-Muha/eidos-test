export const getPageCount = (totalCount, count) => {
  return Math.ceil(totalCount / count);
};

export const getPagesArray = (totalPages) => {
  let result = [];
  for (let i = 0; i < totalPages; i++) {
    result.push(i + 1);
  }
  return result;
};
