import { Component } from '@angular/core';

@Component({
  selector: 'app-header-home',
  templateUrl: './header-home.component.html',
  styleUrls: ['./header-home.component.css']
})
export class HeaderHomeComponent {
  email: string = 'ou.charafi@gmail.com';

  copyEmail() {
    navigator.clipboard.writeText(this.email).then(() => {
      alert('Email copié dans le presse-papiers !' + this.email);
    }).catch(err => {
      console.error('Échec de la copie : ', err);
    });
  }
}
