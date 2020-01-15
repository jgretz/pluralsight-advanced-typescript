import { Category } from "./enums";
import { Book, Logger, Author, Librarian, Magazine } from "./interfaces";
import { PublicLibrarian, UniversityLibrarian, ReferenceItem } from "./classes";
import * as util from "./lib/utilityFunctions";

let lib = new UniversityLibrarian();
let lib2 = new PublicLibrarian();
