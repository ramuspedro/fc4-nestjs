import { Controller, Get, Post, Body, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Category } from 'src/models/category.model';
import { InjectRepository } from '@nestjs/typeorm';

@Controller('categories')
export class CategoryController {

    constructor(
        @InjectRepository(Category)
        private categoryRepo: Repository<Category>
    ) {

    }

    @Get()
    getCategories() {
        return "Retorna todos os usuários";
    }

    @Post()
    async saveCategory(@Body() body: Category): Promise<Category> {
        const category = this.categoryRepo.create(body);
        return this.categoryRepo.save(category);
    }
}
