import { Component, OnInit, Input } from '@angular/core';
import { ApodService } from '../services/apod.service';
import { Payload } from '../models/payload';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})
export class HomeComponent implements OnInit {
  payloads: Payload[] = [];

  @Input() site: string = 'YouTube';
  @Input() key: string = "";

  videoUrl: SafeResourceUrl = '';

  //payload: Payload[] = [];

  constructor(
    private apodService: ApodService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.getPhotos();
  }

  getPhotos(): void {
    this.apodService.getPhotos().subscribe((response: Payload[]) => {
      console.log(response);
      this.payloads = response;
                // this.key = this.payloads.substring(this.payload.lastIndexOf('/') + 1);
                // var parts = this.payloads[0].hdurl.split('/');
                // // this.key = parts.pop();
                // console.log('KEY ' + this.key);
                // this.videoUrl = this.getSafeUrl(
                //   'https://www.youtube.com/embed/' + this.key
                // );
    });
  }

  // getVideoUrl(payloadItems: Payload[]) {
  //   this.key = payloadItems.forEach(payload => payload. .substring(this.payload.lastIndexOf('/') + 1);
  //     var parts = this.payloads[0].hdurl.split('/');
  //     // this.key = parts.pop();
  //     console.log('KEY ' + this.key);
  //     this.videoUrl = this.getSafeUrl(
  //       'https://www.youtube.com/embed/' + this.key
  //     );
  // }

  getSafeUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}

// getPhoto(): void {
//   this.apodService.getPhoto().subscribe((response: any) => {
//     console.log(response);
//     this.payload = response;
//   });
// }
