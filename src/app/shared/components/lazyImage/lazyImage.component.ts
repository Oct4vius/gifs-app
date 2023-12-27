import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: `./lazyImage.component.html`,
  styleUrl: './lazyImage.component.scss'
})
export class LazyImageComponent implements OnInit {
  @Input()
  public url!: string

  @Input()
  public alt: string = 'No se ha podido mostrar la imagen'

  public hasLoaded: boolean = false

  ngOnInit(): void {
   if(!this.url) throw new Error('Method not implemented.');
  }

  onLoad() {
    console.log('Image has loaded')
    this.hasLoaded = true
  }
}
