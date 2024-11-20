/*import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
*/
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { NotificationModule } from './modules/notification/notification.module'; // Import NotificationModule
import { UserPreferencesModule } from './modules/user-preferences/user-preferences.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/user_notifications'),
    UserPreferencesModule,  // Ensure this is imported
    NotificationModule,  // Ensure NotificationModule is imported
  ],
})
export class AppModule {}
