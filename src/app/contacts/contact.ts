export class Contact {
    firstName: string;
    lastName: string;
    address: string;
    emailId: string;
    cellNo: string;
    dateOfBirth: string;
    anniversaryDate: string;
    relationship:string;
    image:string;


constructor(frstName: string, lstName: string, addrs: string, email: string, cell: string, dtBirth: string, annivrsyDate: string, relation: string, image: string ) {
    this.firstName = frstName;
    this.lastName = lstName;
    this.address = addrs;
    this.emailId = email;
    this.cellNo = cell;
    this.dateOfBirth = dtBirth;
    this.anniversaryDate = annivrsyDate;
    this.relationship = relation;
    this.image = image;
}

}