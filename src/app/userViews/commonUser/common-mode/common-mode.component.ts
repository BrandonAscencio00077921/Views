import { Component, importProvidersFrom } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-common-mode',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './common-mode.component.html',
  styleUrl: './common-mode.component.css'
})
export class CommonModeComponent {

}
