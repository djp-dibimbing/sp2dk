import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Datapajak } from './datapajak.entity';
import { DatapajakService } from './datapajak.service';
import { DatapajakController } from './datapajak.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Datapajak])],
  providers: [DatapajakService],
  controllers: [DatapajakController],
  exports: [DatapajakService]
})

export class DatapajakModule {}
