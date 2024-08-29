import http from "http";
import fs from "fs";

const server = http.createServer((req, res) => {
  const filePath = "./files/index.html";
  // С использованием потоков
  if (req.url === "/" && req.method === "GET") {
    const readStream = fs.createReadStream(filePath);
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    readStream.pipe(res);
  }
  // Без использования потоков. Мы читаем весь файл и затем отправляем его клиенту
  if (req.url === "/no-stream" && req.method === "GET") {
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.end("Ошибка чтения файла на сервере");
      } else {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        res.end(data);
      }
    });
  }
});

server.listen(5000, () => {
  console.log("Сервер слушает на порту 5000");
});
