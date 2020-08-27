import { Controller, Get, Post, Body, Inject, Param, Put } from '@nestjs/common';
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
        return this.categoryRepo.find();
    }

    @Get(':id')
    getOneCategory(@Param('id') id: string): Promise<Category> {
        return this.categoryRepo.findOneOrFail(id);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() body: Category): Promise<Category> {
        await this.categoryRepo.findOneOrFail(+id);
        this.categoryRepo.update({id: +id}, body);
        return this.categoryRepo.findOneOrFail(+id);
    }

    @Post()
    async saveCategory(@Body() body: Category): Promise<Category> {
        const category = this.categoryRepo.create(body);
        return this.categoryRepo.save(category);
    }
}
