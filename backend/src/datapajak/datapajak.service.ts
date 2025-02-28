import { BadRequestException, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Datapajak } from './datapajak.entity';

@Injectable()
export class DatapajakService {
    constructor(@InjectRepository(Datapajak) private datapajakRepository: Repository<Datapajak>) {}

    async findById(id: number) {
        return this.datapajakRepository.findOne({ where: { id } });
    }

    async tambah(nama: string, tipe: string, status:string) {
        const datapajak = this.datapajakRepository.create({ nama, tipe, status});
        return this.datapajakRepository.save(datapajak);
    }

    async getAllDatapajak() {
      return this.datapajakRepository.find()
    }

    async edit(id: number, nama: string, tipe: string, status: string) {
        let datapajak = await this.findById(id)

        if (!datapajak)
            throw new BadRequestException('Data not exists');

        datapajak.nama = nama
        datapajak.tipe = tipe
        datapajak.status = status
        return this.datapajakRepository.save(datapajak);
    }

    async hapus(id: number) {
        const datapajak = await this.findById(id)

        if (!datapajak)
            throw new BadRequestException('Data not exists');

        return this.datapajakRepository.delete(id)
    }
}
