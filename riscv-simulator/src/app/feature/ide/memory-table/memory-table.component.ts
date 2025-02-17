
import { Component, OnInit } from '@angular/core';
import { distinctUntilChanged, filter, map } from 'rxjs/operators';
import { IdeService } from '../ide.service';
import { Word } from '../../../models/memory-word'


@Component({
  selector: 'app-memory-table',
  templateUrl: './memory-table.component.html',
  styleUrls: ['./memory-table.component.css']
})
export class MemoryTableComponent implements OnInit {
  instructions: Word[];
  data: Word[]

  constructor(private ideService: IdeService) {
    // i-bibind natin ito dun sa service, sa service dapat naka lagay para auto update
    this.instructions = [
      {
        address: "0x1000",
        value: "0x00000000",
        //color: 'lightblue'
      }
    ];

    this.data = [
      {
        address: "0x0000",
        value: "0x00000000",
        //color: 'lightblue'
      }
    ];


  }

  menuClicked(e, menu: string) {
    console.log(e);
    console.log(menu);
    this.ideService.assembling(true);
  }

  ngOnInit() { }
  
  ngAfterViewInit() {
    const that = this;
    this.ideService.state$
      .pipe(
        map(state => state.instructions),
        filter(data => data != null),
        distinctUntilChanged()
      )
      .subscribe(newInstructions => {
        that.instructions = newInstructions;
      });
    
      this.ideService.state$
      .pipe(
        map(state => state.data),
        filter(data => data != null),
        distinctUntilChanged()
      )
      .subscribe(newData => {
        that.data = newData;
      });
  }
}