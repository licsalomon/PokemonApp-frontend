import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { InputValues } from '../model/inputValues';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  @Output() public emmitSearch: EventEmitter<string> = new EventEmitter();
  @Output() public emmitFilter: EventEmitter<string> = new EventEmitter();
  form!: FormGroup;
  numberInputsError: boolean = false;
  error!: string;
  inputValues!: InputValues[];
  public qty: any[] = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
  public page: any[] = ['Infinite Scroll', 'Pagination'];

  constructor() {}

  ngOnInit(): void {
    this.form = new FormGroup({
      initial: new FormControl(null),
      final: new FormControl(null),
      quantity: new FormControl(null),
      pagination: new FormControl(null),
    });
  }

  public search(value: string) {
    this.emmitSearch.emit(value);
  }
  setFilter() {
    let initialValue = parseInt(this.form.get('initial')?.value);
    let finalValue = parseInt(this.form.get('final')?.value);
    let qtyValue = this.form.get('quantity')?.value;
    let paginationValue = this.form.get('pagination')?.value;
    let values: InputValues = {
      initial: initialValue,
      final: finalValue,
      qty: qtyValue,
      pagination: paginationValue,
  };
    this.validFilterNumbers(values);
  }

  validFilterNumbers(values:any) {
    if (values.initial > values.final) {
      this.numberInputsError = true;
      this.error = 'Sorry, but the inicial value can not be lower than the final value. Try again.';
    }
    else{
      this.emmitFilter.emit(values);
      this.numberInputsError = false;
    }
  }
}
