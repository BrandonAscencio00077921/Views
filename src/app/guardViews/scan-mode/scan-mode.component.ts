import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { BarcodeFormat } from '@zxing/library';

@Component({
  selector: 'app-scan-mode',
  standalone: true,
  imports: [RouterLink, ZXingScannerModule],
  templateUrl: './scan-mode.component.html',
  styleUrl: './scan-mode.component.css',
})
export class ScanModeComponent {
  formats: BarcodeFormat[] = [BarcodeFormat.QR_CODE];

  handleQrCodeResult(result: string) {
    console.log('QR code result:', result);
  }
}
