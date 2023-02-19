import { Body, Controller, Post, Res } from "@nestjs/common";
import { ProductService } from "./product.service";
import { ProductDTO } from "./dto/productDTO";
import { Product } from "./types/ProductInteface";

@Controller("products")
export class ProductController {
  constructor(private readonly productService: ProductService) {
  }

  @Post("create")
  async createProduct(@Body() product: ProductDTO, @Res() response): Promise<Product> {
    try {
      const data = await this.productService.sendProductToAmoCRM(product);
      return response.status(201).json(data);
    } catch (error) {
      throw error
    }

  }

}