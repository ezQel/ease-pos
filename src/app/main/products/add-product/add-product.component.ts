import { Component, Input, OnInit } from '@angular/core';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit {
  @Input()
  modalRef!: NgbModalRef;

  constructor() {}

  ngOnInit(): void {}

  saveProduct(): void {
    this.modalRef.dismiss();
  }
}
