import { Component } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {
  routes=[
    {linkName:'profile', URL:'profile'},
    {linkName:'contact',URL:'contact'}
  ]

}
