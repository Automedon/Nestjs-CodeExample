import {Module} from '@nestjs/common'
import { AppController } from "./app.contoller";
import { AppService } from "./app.service";

@Module({
  controllers:[AppController],
  providers:[AppService]
})
export class AppModule {

}