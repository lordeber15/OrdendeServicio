const http = require("http");

http
  .createServer((req, res) => {
    res.setHeader("Access-Control-Alow-Origin", "*");

    const { url } = req;

    if (url.includes("ordendeservicio/")) {
      const id = url.split("/").at(-1);
      res.end(`estoy en la ruta con el id ${id}`);
    }
  })
  .listen(3001, "localhost");
