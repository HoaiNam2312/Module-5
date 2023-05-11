import {Component, OnInit} from '@angular/core';
import {NhaBan} from '../../../model/nha-ban';
import {Huong} from '../../../model/huong';
import {NhaBanService} from '../../../service/nha-ban.service';
import {HuongService} from '../../../service/huong.service';

@Component({
  selector: 'app-nha-ban-danhsach',
  templateUrl: './nha-ban-danhsach.component.html',
  styleUrls: ['./nha-ban-danhsach.component.css']
})
export class NhaBanDanhsachComponent implements OnInit {
  danhSachNhaBan: NhaBan[];
  danhSachHuong: Huong[];

  constructor(private nhaBanDichVu: NhaBanService,
              private huongDichVu: HuongService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.nhaBanDichVu.getAll().subscribe(next => {
      this.danhSachNhaBan = next;
    });
    this.huongDichVu.getAll().subscribe(next => {
      this.danhSachHuong = next;
    });
  }

  search(dienTich: string, gia: string, huong: string) {
    debugger;
    this.nhaBanDichVu.search(dienTich, gia, huong).subscribe(next => {
      this.danhSachNhaBan = next;
    });
  }
}
