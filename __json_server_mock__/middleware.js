module.exports = (req, res, next) => {
  if (req.method === "POST" && req.path === "/login") {
    if (req.body.username === "ztq" && req.body.password === "123") {
      res.status(200).json({
        user: { token: "123" },
      });
    } else {
      res.status(400).json({
        error: "用户名或密码错误",
      });
    }
  }
  next();
};
