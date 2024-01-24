export const getSpaceId = (): number => {
  const splitUrl = window.location.pathname.split('/');
  let spaceId;

  if (typeof splitUrl[splitUrl.length - 1] === 'number') {
    spaceId = splitUrl[splitUrl.length - 1];
  } else {
    spaceId = splitUrl[splitUrl.length - 2];
  }

  return parseInt(spaceId);
};
