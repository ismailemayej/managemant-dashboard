"use server";
//  post mehtod----------------------------------------------
export const Post = async (data: any, name: any) => {
  const res = await fetch(`${process.env.BASE_URL}/${name}`, {
    cache: "no-store",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return res.json();
};
//  Get mehtod------------------------------------------------
export const Get = async (name: any) => {
  const res = await fetch(`${process.env.BASE_URL}/${name}`, {
    cache: "no-store",
  });
  return res.json();
};
//  Update mehtod-----------------------------------------------
export const Update = async (data: any, name: any, id: any) => {
  console.log("console data", data, name, id);
  const res = await fetch(`${process.env.BASE_URL}/${name}/${id}`, {
    cache: "no-store",
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    next: { revalidate: 10 },
  });
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
  return res.json();
};
//Delete mehtod-----------------------------------------------
export const Delete = async (name: any, id: any) => {
  const res = await fetch(`${process.env.BASE_URL}/${name}/${id}`, {
    cache: "no-store",
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    next: { revalidate: 30 },
  });
  if (!res.ok) {
    const errorDetails = await res.text();
    throw new Error(`Network response was not ok: ${errorDetails}`);
  }
  return res.json();
};
