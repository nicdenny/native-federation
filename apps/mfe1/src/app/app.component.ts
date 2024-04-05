import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContentComponent } from '@native-federation/mfe1/feature-content';

@Component({
  standalone: true,
  imports: [RouterModule, ContentComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
