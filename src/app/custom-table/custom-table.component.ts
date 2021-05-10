import { Component, OnInit } from '@angular/core';

import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  isActive: boolean;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', isActive: false },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', isActive: false },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', isActive: false },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', isActive: false },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B', isActive: false },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C', isActive: false },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N', isActive: false },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O', isActive: false },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F', isActive: false },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne', isActive: false },
];

@Component({
  selector: 'app-custom-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.scss']
})
export class CustomTableComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'Active'];
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
