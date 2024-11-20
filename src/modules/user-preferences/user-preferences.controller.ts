import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { UserPreference } from '../../schemas/user-preference.schema';
import { UserPreferencesService } from './user-preferences.service';

@Controller('api/preferences')
export class UserPreferencesController {
  constructor(private readonly userPreferencesService: UserPreferencesService) {}

  @Post()
  async create(@Body() data: Partial<UserPreference>) {
    return this.userPreferencesService.create(data);
  }

  @Get(':userId')
  async findById(@Param('userId') userId: string) {
    return this.userPreferencesService.findById(userId);
  }

  @Patch(':userId')
  async update(@Param('userId') userId: string, @Body() data: Partial<UserPreference>) {
    return this.userPreferencesService.update(userId, data);
  }

  @Delete(':userId')
  async delete(@Param('userId') userId: string) {
    await this.userPreferencesService.delete(userId);
    return { message: 'User deleted successfully' };
  }
}
