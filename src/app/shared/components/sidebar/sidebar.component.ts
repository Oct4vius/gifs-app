import { Component } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

  constructor(private gifsService: GifsService){}

  public tagsHistory: string[] = this.gifsService.tagsHistory

  print(){
    console.log(this.tagsHistory)
  }

}
