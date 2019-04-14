const updateQueryString = (query: string) => {
  const newUrl = location.origin + location.pathname + query;
  history.pushState(null, "", newUrl);
};

export default updateQueryString;
