import { NotificationsController } from './notifications.controller';
import { NotificationsService } from './notifications.service';
import { Module } from '@nestjs/common';
import { NotificationsRepository } from './repositories/notifications.repository';

@Module({
  imports: [],
  controllers: [NotificationsController], // controllers
  providers: [NotificationsService, NotificationsRepository], // services e repository
})
export class NotificationsModule {}
