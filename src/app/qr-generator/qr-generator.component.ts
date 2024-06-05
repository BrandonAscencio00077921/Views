import { Component } from '@angular/core';
import { QRCodeModule } from 'angularx-qrcode';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-qr-generator',
  standalone: true,
  imports: [QRCodeModule, RouterLink],
  templateUrl: './qr-generator.component.html',
  styleUrl: './qr-generator.component.css'
})
export class QrGeneratorComponent {
  myAngularxQrCode: string = ''

  constructor(){
    this.myAngularxQrCode = 'https://ecampus.uca.edu.sv/'
  }
}
