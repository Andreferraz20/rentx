import csvParse from "csv-parse";
import fs from "fs";

import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";

interface IImportCategory {
    name: string;
    description: string;
}

class ImportCategoryUseCase {
    constructor(private categoriesRepository: CategoriesRepository) {}

    loadCategories(file: Express.Multer.File) {
        return new Promise((resolve, eject) => {
            const stream = fs.createReadStream(file.path);
            const categories: IImportCategory[] = [];

            const parseFile = csvParse();

            stream.pipe(parseFile);

            parseFile
                .on("data", async (line) => {
                    const [name, description] = line;
                    categories.push({
                        name,
                        description,
                    });
                })
                .on("end", () => {
                    resolve(categories);
                });
        });
    }

    execute(file: Express.Multer.File): void {
        const categories = this.loadCategories(file);
        console.log(categories);
    }
}

export { ImportCategoryUseCase };
