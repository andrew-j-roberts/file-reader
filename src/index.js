import fs from "fs";

const path = "setup.py";

async function run() {
  const lines = await getLines(path);
  const importStatements = getImportStatements(lines);

  console.log(`Dependencies included in file '${path}' include:`);
  console.log("+-+-+-+-+-+-+-+-+-+-+-+-+-+");
  importStatements.forEach((dependency) => {
    console.log(dependency);
  });

  console.log("+-+-+-+-+-+-+-+-+-+-+-+-+-+");
  console.log("... thanks for letting me code in private.");
}

async function getLines(path) {
  return fs.readFileSync(path).toString().split("\n");
}

function getImportStatements(lines) {
  const rawImportStatements = lines.filter((line) => line.startsWith("import "));
  const printFormattedImportStatements = rawImportStatements.map((line) => line.replace("import ", ""));
  return printFormattedImportStatements;
}

console.log("+-+-+-+-+-+-+-+-+-+-+-+-+-+");
console.log("Starting file reader...");
console.log("+-+-+-+-+-+-+-+-+-+-+-+-+-+");

run();
