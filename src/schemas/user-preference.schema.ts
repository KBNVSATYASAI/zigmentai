import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserPreferenceDocument = UserPreference & Document;

@Schema({ timestamps: true })
export class UserPreference {
  @Prop({ required: true })
  userId: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({
    type: Object,
    required: true,
    default: {
      marketing: false,
      newsletter: false,
      updates: false,
      frequency: 'never',
      channels: {
        email: false,
        sms: false,
        push: false,
      },
    },
  })
  preferences: Record<string, any>;

  @Prop({ required: true })
  timezone: string;
}

export const UserPreferenceSchema = SchemaFactory.createForClass(UserPreference);
