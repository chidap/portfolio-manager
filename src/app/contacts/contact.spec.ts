import {Contact} from './contact';

describe('Contact', () => {
  it('should create an instance', () => {
    expect(new Contact('','','','','','','','','')).toBeTruthy();
  });

  it('should accept values in the constructor',()=> {
    let contact = new Contact('Chidananda', 'Patra', 'DLF Garden City', 'chida_p@yahoo.com', '9884489539', '19/07/1974', '31/01/2001', 'Self', '../app/images/chida.png');
    expect(contact.firstName).toEqual('Chidananda');
    expect(contact.lastName).toEqual('Patra');
    expect(contact.address).toEqual('DLF Garden City');
  });
});
