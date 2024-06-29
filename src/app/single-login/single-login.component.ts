import { Component } from '@angular/core';
import { SpinnerComponent } from '../spinner/spinner.component';

@Component({
  selector: 'app-single-login',
  standalone: true,
  imports: [SpinnerComponent],
  templateUrl: './single-login.component.html',
  styleUrl: './single-login.component.css'
})
export class SingleLoginComponent {
  public isLoading: boolean = true;

  ngOnInit() {
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  }
}
