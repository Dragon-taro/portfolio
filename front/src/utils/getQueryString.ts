const getQueryString = () => {
  const url = window.location.search;
  const hash = url.slice(1).split("&");
  const max = hash.length;
  let vars: { [key: string]: string } = {};
  for (var i = 0; i < max; i++) {
    const array = hash[i].split("=");
    vars[array[0]] = array[1];
  }

  return vars;
};

export default getQueryString;
