import { featureModule } from './modules/index';
import { Module, ValidationPipe } from '@nestjs/common';
import { globalModules } from './modules/global';
import { APP_PIPE } from '@nestjs/core';

@Module({
  imports: [...globalModules, ...featureModule],
  controllers: [],
  providers: [
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
  ],
})
export class AppModule {}
