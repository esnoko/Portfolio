export const getImageUrl = (path) => {
    return new URL(`/Portfolio/assets/${path}`, import.meta.url).href;
};
  