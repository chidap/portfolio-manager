import { Injectable } from '@angular/core';
import {Contact } from './contact';

@Injectable()
export class ContactListService {
  private contactList: Contact[] = [
    new Contact('Paoli','Patra','DLF Garden City','paoli_p@yahoo.com','9884489539','26/02/2007','','Daughter','../../assets/images/contact/chida.jpg'),
    new Contact('Chandradeep','Patra','DLF Garden City','chandradeep_p@yahoo.com','9884489539','12/03/2003','','Son','../../assets/images/contact/chida.jpg'),
    new Contact('Panchali','Patra','DLF Garden City','panchalipatra@yahoo.com','9884489536','24/08/1979','','Spouse','../../assets/images/contact/chida.jpg')
  ];
  
  getContactList() {
    return this.contactList;
  }

  getContact(email: string) : Contact {
    return this.contactList
                .filter(contact=>contact.emailId === email)
                .pop();
  }

  getContactByBirthday(birthday: string) : Contact {
      return this.contactList
                  .filter(contact=>contact.dateOfBirth === birthday)
                  .pop();

  }

}
