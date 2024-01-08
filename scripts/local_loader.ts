import { FileLoader } from "@libreservice/micro-plum";
import { readFileSync } from "fs";

export class LocalLoader implements FileLoader {
  repo: string;
  schemaIds: string[];

  constructor(repo: string, schemaIds: string[]) {
    this.repo = repo;
    this.schemaIds = schemaIds;
  }

  async loadFile(file: string) {
    console.log(`Asked to load ${file}`);
    return readFileSync("sbxlm/" + file);
  }
}
