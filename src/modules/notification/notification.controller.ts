import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { NotificationService } from './notification.service';

@Controller('api/notifications')
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  // Send notification request
  @Post('/send')
  async sendNotification(
    @Body() { userId, type, channel, content }: { userId: string; type: string; channel: string; content: Record<string, any> },
  ) {
    return this.notificationService.sendNotification(userId, type, channel, content);
  }

  // Get notification logs for a user
  @Get('/:userId/logs')
  async getNotificationLogs(@Param('userId') userId: string) {
    return this.notificationService.getNotificationLogs(userId);
  }

  // Get notification stats (e.g., sent, failed)
  @Get('/stats')
  async getStats() {
    return this.notificationService.getStats();
  }
}
