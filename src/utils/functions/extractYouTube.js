export const extractYouTubeID = (url) => {
  const regExp =
    /(?:youtu\.be\/|youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=))([^"&?\/\s]{11})/;
  const match = url.match(regExp);
  return match ? match[1] : null;
};
