import { Component, OnInit } from '@angular/core';
import { Contact } from './contact';
import { ContactListService } from './contact-list.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
  providers: [ContactListService]
})
export class ContactsComponent implements OnInit{
 private contactList: Contact[] = [];
  
  constructor(private contactListService: ContactListService) { }

  ngOnInit() {
    this.contactList = this.contactListService.getContactList();
    console.log(this.contactList);
  }

}
