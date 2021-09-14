export const isValidUrl = string => {
  if (!string) {
    return false;
  }
  const regex =
    /(https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;

  return string.match(regex);
};
