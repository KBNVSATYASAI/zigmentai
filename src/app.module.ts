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
import { AppController } from './app.controller'; // Import the AppController
import { AppService } from './app.service';
import { NotificationModule } from './modules/notification/notification.module';
import { UserPreferencesModule } from './modules/user-preferences/user-preferences.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://Balu:Balu123@cluster0.itvyruz.mongodb.net/<database_name>?retryWrites=true&w=majority&appName=Cluster0'
    ),
    UserPreferencesModule,
    NotificationModule,
  ],
  controllers: [AppController],  // Add the controller here
  providers: [AppService],
})
export class AppModule {}
