import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { Product } from "./types/ProductInteface";
import { HttpService } from "@nestjs/axios";

@Injectable()
export class ProductService {
  constructor(private readonly httpService: HttpService) {
  }

  async sendProductToAmoCRM(product): Promise<Product> {
    try {
      const headers = { "Authorization": `Bearer ${process.env.ACCESS_TOKEN}` };

      // const { data } = await this.httpService
      //   .post(`${process.env.BASE_URL}/api/v4/${product.type}`, [{name: product.name}] , {
      //     headers
      //   })
      //   .toPromise();

      const response = {id: 213141}
        // {id: data['_embedded'].leads[0].id} ;

      return response;
    } catch (error) {
      console.log(error);
      throw new HttpException("Ошибка при запросе на amoCRM API", HttpStatus.BAD_GATEWAY)
    }

  }
}
