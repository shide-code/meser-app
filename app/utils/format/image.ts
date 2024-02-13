export const imageDefault = (imageUrl?: string) => {
  return imageUrl
    ? { uri: imageUrl }
    : require("_assets/images/placeholder.png");
};

export const imageUrlDefault = (imageUrl?: string, size = 124) => {
  return imageUrl ? imageUrl : `https://via.placeholder.com/${size}`;
};

export const toFormData = <T>(data: T) => {
  const formData = new FormData();
  for (const [key, value] of Object.entries(data)) {
    formData.append(key, value);
  }
  return formData;
};
