import { ArrendadorService } from './../../services/arrendador.service';
import { Arrendador } from './../../models/arrendador';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-list-arrendadores',
  templateUrl: './list-arrendadores.component.html',
  styleUrls: ['./list-arrendadores.component.css']
})
export class ListArrendadoresComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nombre', 'TEP'];
  dataSource = new MatTableDataSource<Arrendador>();

  arrendadores!: Arrendador[];

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  constructor(private arrendadorService: ArrendadorService) {}

  ngOnInit(): void {
    this.getArrendadores();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getArrendadores() {
    this.arrendadorService.getArrendadores().subscribe((data: Arrendador[]) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
  }
}
