import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Huong} from '../../../model/huong';
import {NhaBanService} from '../../../service/nha-ban.service';
import {HuongService} from '../../../service/huong.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nha-ban-them-moi',
  templateUrl: './nha-ban-them-moi.component.html',
  styleUrls: ['./nha-ban-them-moi.component.css']
})
export class NhaBanThemMoiComponent implements OnInit {
  creatForm: FormGroup;
  danhSachHuong: Huong[];

  constructor(private nhaBanDichVu: NhaBanService,
              private huongDichVu: HuongService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.huongDichVu.getAll().subscribe(next => {
      this.danhSachHuong = next;
    });
    this.creatForm = new FormGroup({
      id: new FormControl(null),
      danhMuc: new FormControl(null),
      vungMien: new FormControl(null),
      banLa: new FormControl(null),
      banDangTin: new FormControl(null),
      tinhTrang: new FormControl(null),
      diaChi: new FormControl(null, [Validators.required]),
      dienTich: new FormControl(null, [Validators.required, Validators.min(21)]),
      huong: new FormControl('', [Validators.required]),
      tuaDe: new FormControl(null, [Validators.required]),
      noiDung: new FormControl(null, [Validators.required]),
      gia: new FormControl(null, [Validators.required, Validators.min(100000000)]),
    });
  }

  submit() {
    this.nhaBanDichVu.save(this.creatForm.value).subscribe(next => {
      this.router.navigateByUrl('/nhaBan/list');
    });
  }
}
