export const filterByMimetype = (mimetype: string) => {
  return (req, file, cb) => {
    if (file.mimetype.substring(0, `${mimetype}`.length) === mimetype) {
      cb(null, true);
    } else {
      cb(null, false);
    }
  };
};
