export const navigate = (e, route) => {
  e.preventDefault();
  window.history.pushState('', '', route.path);
  route.page();
};

/*
export const navigate = (e, route) => {
  e.preventDefault();
  window.history.pushState('', '', route.path);

  const match = window.location.pathname.match(/\/cancion\/([^\/]+)/);
  if (match) {
    const normalizedName = match[1];
    Song({ normalizedName });
  } else {
    route.page();
  }
};
*/
