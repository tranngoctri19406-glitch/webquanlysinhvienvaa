import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { SinhVienModule } from './modules/sinh-vien/sinh-vien.module';
import { GiangVienModule } from './modules/giang-vien/giang-vien.module';
import { LopHocPhanModule } from './modules/lop-hoc-phan/lop-hoc-phan.module';
import { PhanCongGiangDayModule } from './modules/phan-cong-giang-day/phan-cong-giang-day.module';
import { SuKienModule } from './modules/su-kien/su-kien.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '123456',
      database: 'quan_li_sv',
      autoLoadEntities: true,
      synchronize: false,
    }),
    AuthModule,
    DashboardModule,
    SinhVienModule,
    GiangVienModule,
    LopHocPhanModule,
    PhanCongGiangDayModule,
    SuKienModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
