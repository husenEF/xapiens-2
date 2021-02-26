const axios = require("axios").default;

const url = "https://jsonplaceholder.typicode.com/posts";

// axios
//   .get(url, {
//     params: {
//       ID: 12345,
//     },
//   })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((error) => {
//     console.log({ error });
//   });

// axios
//   .delete("http://localhost:2500/tes", {
//     username: "halo",
//     password: "123123",
//   })
//   .then((res) => {
//     console.log({ res });
//   })
//   .catch((err) => {
//     console.log({ err });
//   });

const getPost = async () => {
  const raw = await axios.get(url, {
    headers: {
      authorization: "Bearer asjdkajsdiua978dahskjhqwkje8qmn",
    },
  });
  console.log("ss", { raw: raw.data });
  return raw.data;
};

getPost();
