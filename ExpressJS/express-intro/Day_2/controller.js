export const usernameController = (req, res) => {
  const username = req.params.username; //http://localhost:3000/users/shanbel
  res.send(`welcome ${username}`);
};

export const searchController = (req, res) => {
  const keyword = req.query.keyword;
  res.send(`searching for keyword: ${keyword}`); //http://localhost:3000/search?keyword=php
};
