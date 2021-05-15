import { Component, OnInit } from '@angular/core';

import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  additionalValue: string;
  isActive: boolean;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', isActive: false, additionalValue: 'Random Text' },
  { position: 2, name: '', weight: 4.0026, symbol: 'He', isActive: false, additionalValue: 'dummyVal' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', isActive: false, additionalValue: '' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', isActive: false, additionalValue: 'Answer' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B', isActive: false, additionalValue: 'dummyVal' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C', isActive: false, additionalValue: '' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N', isActive: false, additionalValue: 'Test' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O', isActive: false, additionalValue: '' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F', isActive: false, additionalValue: 'dummyVal' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne', isActive: false, additionalValue: '' },
];

@Component({
  selector: 'app-custom-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.scss']
})
export class CustomTableComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'Active', 'Pipe Transform Text'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected(): boolean {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle(): void {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }
  ngOnInit(): void {

  }
  toggleEl(position: number): void {
    this.dataSource.data.forEach(el => {
      if (el.position === position) {
        el.isActive = !el.isActive;
      }
    });
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

}
