import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserPreference, UserPreferenceDocument } from '../../schemas/user-preference.schema';

@Injectable()
export class UserPreferencesService {
  constructor(
    @InjectModel(UserPreference.name) private userPreferenceModel: Model<UserPreferenceDocument>,
  ) {}

  async create(data: Partial<UserPreference>): Promise<UserPreference> {
    return new this.userPreferenceModel(data).save();
  }

  async findById(userId: string): Promise<UserPreference> {
    const user = await this.userPreferenceModel.findOne({ userId });
    if (!user) throw new NotFoundException('User not found');
    return user;
  }

  async update(userId: string, data: Partial<UserPreference>): Promise<UserPreference> {
    const user = await this.userPreferenceModel.findOneAndUpdate({ userId }, data, { new: true });
    if (!user) throw new NotFoundException('User not found');
    return user;
  }

  async delete(userId: string): Promise<void> {
    const result = await this.userPreferenceModel.deleteOne({ userId });
    if (result.deletedCount === 0) throw new NotFoundException('User not found');
  }
}
