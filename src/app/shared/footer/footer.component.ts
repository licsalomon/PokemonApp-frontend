import { ApiService } from 'src/app/service.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  @Output() public emmitSearch: EventEmitter<string> = new EventEmitter();
 
  constructor() { }

  ngOnInit(): void {
  }
 
  public search(value: string){
    this.emmitSearch.emit(value);
  }
}
