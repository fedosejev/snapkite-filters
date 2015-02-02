module.exports = function (tweet) {
  if (tweet.possibly_sensitive) {
    return true;
  }

  return false;
};