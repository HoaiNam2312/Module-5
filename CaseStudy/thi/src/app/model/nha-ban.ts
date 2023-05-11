import {Huong} from './huong';

export interface NhaBan {
  id?: number;
  danhMuc?: string;
  vungMien?: string;
  banLa?: string;
  banDangTin?: string;
  tinhTrang?: string;
  ngayDang?: string;
  diaChi: string;
  dienTich: number;
  huong?: Huong;
  tuaDe: string;
  noiDung: string;
  gia: number;
}
