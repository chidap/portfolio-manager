import { Component, OnInit } from '@angular/core';
import { ModalService }  from './../common/modal.service';
@Component({
  moduleId: module.id,
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  //providers: [ModalService],
})
export class HeaderComponent implements OnInit {

  constructor(private modalService: ModalService) { }

  ngOnInit() {
  }

   openModal(id: string){
        this.modalService.open(id);
    }
 
    closeModal(id: string){
        this.modalService.close(id);
    }

}
