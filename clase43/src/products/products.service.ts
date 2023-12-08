import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Product, ProductsDocument } from './schema/products.schema';
import { Model } from 'mongoose';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name)
    private productModel: Model<ProductsDocument>,

    private usersService: UsersService,
  ) {}

  async create(createProductDto: CreateProductDto) {
    const user = await this.usersService.findOne(createProductDto.user);
    console.log(user);
    const newProduct = await this.productModel.create(createProductDto);

    return { message: newProduct };
  }

  async findAll() {
    const products = await this.productModel.find();
    return { message: products };
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    console.log(
      '🚀 ~ file: products.service.ts:24 ~ ProductsService ~ update ~ updateProductDto:',
      updateProductDto,
    );
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
