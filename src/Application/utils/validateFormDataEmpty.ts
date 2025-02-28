export const validateFormDataEmpty = (formData: FormData): boolean => {
  let isEmpty = true;
  formData.forEach((value) => {
    if (value !== "undefined") isEmpty = false;
  });
  return isEmpty;
};
