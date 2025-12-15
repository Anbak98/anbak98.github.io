import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.html',
  styleUrls: ['./contact.css']
})
export class Contact {

  links = [
    {
      name: 'Tistory',
      icon: 'assets/icons/blog.svg',
      url: 'https://anbak.tistory.com/'
    },
    {
      name: 'Notion',
      icon: 'assets/icons/notion.svg',
      url: 'https://www.notion.so/20942be5b78c80c49a3bf0aa55328543?source=copy_link'
    },
    {
      name: 'GitHub',
      icon: 'assets/icons/github.svg',
      url: 'https://github.com/Anbak98'
    },
    {
      name: 'Steam',
      icon: 'assets/icons/steam.svg',
      url: 'https://steamcommunity.com/profiles/76561198451739854/'
    }
  ];

  email = 'anbak98@gmail.com';
  phone = '+82 10-8262-7443'
}
