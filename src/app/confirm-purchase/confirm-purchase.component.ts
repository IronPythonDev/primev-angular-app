import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Resource } from '../Account';

@Component({
  selector: 'app-confirm-purchase',
  templateUrl: './confirm-purchase.component.html',
  styleUrls: ['./confirm-purchase.component.scss']
})
export class ConfirmPurchaseComponent implements OnInit {

  resource: Resource = {};

  images: any[] = [{
    "previewImageSrc": "https://pbs.twimg.com/media/Ee06jupX0AQ1GCY.png",
    "thumbnailImageSrc": "https://pbs.twimg.com/media/Ee06jupX0AQ1GCY.png",
    "alt": "Description for Image 1",
    "title": "Title 1"
  },
  {
    "previewImageSrc": "https://repository-images.githubusercontent.com/278150367/377c5e80-ecfd-11ea-8ecf-0463b68a2d78",
    "thumbnailImageSrc": "https://repository-images.githubusercontent.com/278150367/377c5e80-ecfd-11ea-8ecf-0463b68a2d78",
    "alt": "Description for Image 2",
    "title": "Title 2"
  },
  {
    "previewImageSrc": "https://poadu.files.wordpress.com/2011/03/sam_2459b.jpg",
    "thumbnailImageSrc": "https://poadu.files.wordpress.com/2011/03/sam_2459b.jpg",
    "alt": "Description for Image 3",
    "title": "Title 3"
  },
  {
    "previewImageSrc": "https://i.ytimg.com/vi/vLXN_Dpt5E4/maxresdefault.jpg",
    "thumbnailImageSrc": "https://i.ytimg.com/vi/vLXN_Dpt5E4/maxresdefault.jpg",
    "alt": "Description for Image 4",
    "title": "Title 3"
  },
  {
    "previewImageSrc": "https://img.gta5-mods.com/q75/images/fivereborn/9518dd-unknown2%20(1).png",
    "thumbnailImageSrc": "https://img.gta5-mods.com/q75/images/fivereborn/9518dd-unknown2%20(1).png",
    "alt": "Description for Image 5",
    "title": "Title 3"
  },];

  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 5
    },
    {
      breakpoint: '768px',
      numVisible: 3
    },
    {
      breakpoint: '560px',
      numVisible: 1
    }
  ];

  responsiveOptions2: any[] = [
    {
      breakpoint: '1500px',
      numVisible: 5
    },
    {
      breakpoint: '1024px',
      numVisible: 3
    },
    {
      breakpoint: '768px',
      numVisible: 2
    },
    {
      breakpoint: '560px',
      numVisible: 1
    }
  ];

  displayBasic: boolean = true;

  displayBasic2: boolean = true;

  displayCustom: boolean = true;

  activeIndex: number = 0;

  constructor(public ref: DynamicDialogRef, public config: DynamicDialogConfig) { }

  ngOnInit(): void {
    this.resource = this.config.data;
    console.log(this.config.data);
  }


  confirm() {
    this.ref.close('OK')
  }

  openImages() {
    this.displayCustom = true;    
  }
}
