import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { NotificationLog, NotificationLogDocument } from '../../schemas/notification-log.schema';

@Injectable()
export class NotificationService {
  constructor(
    @InjectModel(NotificationLog.name) private notificationLogModel: Model<NotificationLogDocument>,
  ) {}

  // Send notification and log it
  async sendNotification(userId: string, type: string, channel: string, content: Record<string, any>): Promise<NotificationLog> {
    const notification = new this.notificationLogModel({
      userId,
      type,
      channel,
      status: 'pending',
      metadata: content,
    });
    
    // Simulate sending the notification (this part should be connected to actual logic like email/SMS API)
    try {
      notification.status = 'sent';
      notification.sentAt = new Date();
    } catch (error) {
      notification.status = 'failed';
      notification.failureReason = error.message;
    }
    
    return notification.save();
  }

  // Get notification logs by user ID
  async getNotificationLogs(userId: string): Promise<NotificationLog[]> {
    const logs = await this.notificationLogModel.find({ userId });
    if (!logs || logs.length === 0) {
      throw new NotFoundException('No notifications found for this user');
    }
    return logs;
  }

  // Get overall stats for notifications
  async getStats(): Promise<any> {
    const sentCount = await this.notificationLogModel.countDocuments({ status: 'sent' });
    const failedCount = await this.notificationLogModel.countDocuments({ status: 'failed' });
    return {
      sent: sentCount,
      failed: failedCount,
    };
  }
}
