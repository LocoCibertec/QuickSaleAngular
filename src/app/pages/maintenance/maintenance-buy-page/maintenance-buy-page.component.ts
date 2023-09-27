import { Component, OnInit, inject } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { CardEventComponent } from '../../../commons/components/card-event/card-event.component';
import { SharedFormCompleteModule } from '../../../commons/shared/shared-form-complete.module';
import { DatePipe } from '@angular/common';
import { SaleApiService } from 'src/app/commons/services/api/sale/sale-api.service';

export interface PeriodicElement {
	name: string;
	position: number;
	weight: number;
	symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
	{ position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
	{ position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
	{ position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
	{ position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
	{ position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
	{ position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
	{ position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
	{ position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
	{ position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
	{ position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' }
];

@Component({
	standalone: true,
	selector: 'app-maintenance-buy-page',
	templateUrl: './maintenance-buy-page.component.html',
	styleUrls: ['./maintenance-buy-page.component.scss'],
	imports: [RouterModule, SharedFormCompleteModule, CardEventComponent, MatPaginatorModule, MatTableModule],
	providers: [DatePipe]
})
export default class MaintenanceBuyPageComponent implements OnInit {
	displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
	dataSource = new MatTableDataSource(ELEMENT_DATA);

	private _saleApiService = inject(SaleApiService);
	private _datePipe = inject(DatePipe);

	applyFilter(event: Event): void {
		const filterValue = (event.target as HTMLInputElement).value;
		this.dataSource.filter = filterValue.trim().toLowerCase();
	}

	ngOnInit(): void {
		this._loadBuys();
	}

	private _loadBuys(): void {
		const dateStart = this._datePipe.transform(new Date(), 'yyyy-MM-dd')!;
		const dateEnd = this._datePipe.transform(new Date(), 'yyyy-MM-dd')!;

		this._saleApiService.getListSales({ dateStart, dateEnd }).subscribe((response) => {
			if (response && response.success) {
				//this.dataSource.data = response.data;
			}
		});
	}
}
