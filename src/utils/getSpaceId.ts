export const getSpaceId = (): number => {
  const splitUrl = window.location.pathname.split('/');
  const spaceId = splitUrl[splitUrl.length - 1];

  return parseInt(spaceId);
};
