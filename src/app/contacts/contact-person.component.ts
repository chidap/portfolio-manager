import { Component,Input } from '@angular/core';
import { Contact } from './contact';

@Component({
  selector: 'app-contact-person',
  templateUrl: './contact-person.component.html',
  styleUrls: ['./contact-person.component.css']
})
export class ContactPersonComponent {
@Input() contactPerson: Contact;
  

}
