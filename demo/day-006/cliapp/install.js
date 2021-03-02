#!/usr/bin/env node

const { program } = require("@caporal/core");

program
  .command("add")
  .argument()
  .action()
  
  .command("install", "Install Program")
  .alias("i")
  .argument("<lib>", "library nane")
  .action(({ logger, args }) => {
    const { lib } = args;
    logger.info(`npm install ${lib} `);
  })
  .command("uninstall", "uninstall apps")
  .alias("u")
  .action(({ logger }) => {
    logger.info("uninstall run");
  })
  .command("info", "uninstall apps")
  .alias("if")
  .default()
  .action(({ logger }) => {
    logger.info("info run");
  });

program.run();
