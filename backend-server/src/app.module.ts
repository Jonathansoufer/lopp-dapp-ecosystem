import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { NotificationModule } from './notification/notification.module';
import { GoalModule } from './goal/goal.module';
import { StakingModule } from './staking/staking.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [DatabaseModule, NotificationModule, GoalModule, StakingModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
