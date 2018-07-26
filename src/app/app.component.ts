import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { environment } from "../environments/environment"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  devMode = !environment.production
  title = 'RDV';
}
