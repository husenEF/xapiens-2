#!/usr/bin/env node

const { program } = require("@caporal/core");

program
  .argument("<name>", "nama user")
  .argument("<umur>", "umur anda", { default: 15, validator: program.NUMBER })
  .argument("[alamat]", "This argument is optional")
  .argument("number...", "multi number")
  .option("--greeting <salam>", "text Untuk salam")
  .option("-u,--uper", "uppercast text")
  .option("-c,--calculate [method]", "des of calculate.[+,-,%,*,/]", {
    required: true,
  })
  .action(({ logger, args, options }) => {
    //   console.log({ argument });
    const { name, umur, alamat, number } = args;
    const { greeting, uper, calculate } = options;
    console.log({ calculate });
    let text = "";
    text += greeting !== undefined ? greeting : "Halo";
    text += ` ${name}\r\nUmur:${umur}`;
    if (alamat !== undefined) text += `\r\nAlamat:${alamat}`;
    text = uper ? text.toUpperCase() : text;
    // console.log({ uper });
    logger.info(text);

    if (calculate === "+") {
      const total = number.reduce((prev, current) => prev + current, 0);
      logger.info(`sum : ${total}`);
    } else if (calculate === "/") {
      const total = number.reduce((prev, current) => prev + current, 0);
      logger.info(`average : ${total / number.length}`);
    } else {
    }

    // if (alamat !== undefined) logger.info("Alamat : " + alamat);
    // // console.log({ number });
    // if (number !== undefined) {
    //   const total = number.reduce((prev, current) => prev + current, 0);
    //   //   console.log({ total });
    //   logger.info(`total angka:${total}`);
    // }
    //   logger.verbose("ini verboser");
  });

program.run();
