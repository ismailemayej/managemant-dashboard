
export const modifyPayload = (values: any) => {
  const obj = { ...values };
  const file = obj["file"];
  delete obj["file"];
  const data = JSON.stringify(obj.data);
  const formData = new FormData();
  formData.append("data", data);
  if (file) {
    formData.append("file", file as Blob);
}

  return formData;
};

