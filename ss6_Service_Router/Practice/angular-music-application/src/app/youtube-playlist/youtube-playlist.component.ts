import {Component, OnInit} from '@angular/core';
import {Song} from '../model/song';
import {SongService} from '../service/song.service';
import {Routes} from '@angular/router';

@Component({
  selector: 'app-youtube-playlist',
  templateUrl: './youtube-playlist.component.html',
  styleUrls: ['./youtube-playlist.component.css']
})
export class YoutubePlaylistComponent implements OnInit {
  playList: Song[];
  constructor(private songService: SongService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void {
    this.playList = this.songService.playlist;
  }
}
