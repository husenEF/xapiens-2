const axios = require("axios").default;

const url1 = "https://jsonplaceholder.typicode.com/posts";
const url2 = "https://jsonplaceholder.typicode.com/users";

const getUser = async () => await axios.get(url2).then((res) => res.data);

const getPost = async () => await axios.get(url1).then((res) => res.data);

const main = async () => {
  const users = await getUser();
  const post = await getPost();
  const newPost = post.map((e) => {
    const user = users.find((u) => u.id === e.userId);
    // e["user"] = { name: user.name, username: user.username, id: user.id };
    e.username = user.username;
    return e;
  });

  console.log({ newPost });
};

main();
