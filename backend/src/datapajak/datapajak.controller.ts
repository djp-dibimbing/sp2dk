import { Controller, Post, Body, UseGuards, Get, Request, Delete, Patch, Put } from '@nestjs/common';
import { DatapajakService } from './datapajak.service';
import { AuthGuard } from '@nestjs/passport';
  
@Controller('datapajak')
export class DatapajakController {

    constructor(private datapajakService: DatapajakService) {}

    @Put('tambah')
    @UseGuards(AuthGuard('jwt'))
    async tambah(@Body() body: {nama: string; tipe: string; status:string;}) {
        return this.datapajakService.tambah(body.nama, body.tipe, body.status);
    }

    @Get('alldata')
    @UseGuards(AuthGuard('jwt'))
    async alldata(@Request() req) {
        return this.datapajakService.getAllDatapajak();
    }

    @Patch('edit')
    @UseGuards(AuthGuard('jwt'))
    async edit(@Body() body: {id: number; nama: string; tipe: string; status:string;}) {
        return this.datapajakService.edit(body.id, body.nama, body.tipe, body.status);
    }

    @Delete('hapus')
    @UseGuards(AuthGuard('jwt'))
    async hapus(@Body() body: {id: number;}) {
        return this.datapajakService.hapus(body.id);
    }
}