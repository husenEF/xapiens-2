const fs = require("fs");
const os = require("os");
// const process = require("process");

class Log {
  constructor(type = 6, message = "") {
    this.type = type;
    this.message = message;
    if (message !== "") this.display(type, message);
  }

  getDate() {
    let d = new Date();
    return d.toUTCString();
  }

  #createMessage(severity = "Informational", message = "") {
    //[2018-04-03T12:10:36.100Z] INFO: This is an information about something.
    let responseMessage = `[${this.getDate()}] ${severity} ${message}`;
    this.#saveLog(responseMessage);
    return responseMessage;
  }

  #saveLog(message = "") {
    if (message) {
      fs.appendFile("app.log", message + "\r\n", (error) => {
        if (error) {
          console.log({ error });
        }
        console.log("file created");
      });
    }
  }

  display(type = 6, message = "") {
    switch (type) {
      case 6:
      case "info":
      default:
        const respones = this.#createMessage("INFO", message);
        console.log({ respones });
        break;
    }
  }
}

const log = new Log();
log.display("info", "Selamat pagi");

console.log(os.cpus());
