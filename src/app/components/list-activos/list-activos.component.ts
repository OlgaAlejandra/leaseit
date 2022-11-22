import { ActivoService } from './../../services/activo.service';
import { Activo } from './../../models/activo';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-list-activos',
  templateUrl: './list-activos.component.html',
  styleUrls: ['./list-activos.component.css']
})
export class ListActivosComponent implements OnInit {
  displayedColumns: string[] = ['id','nombre','precio','g_inicial'];
  dataSource = new MatTableDataSource<Activo>();
  variable?: boolean;

  activos!: Activo[];

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  constructor(private activoService: ActivoService) {}

  ngOnInit(): void {
    this.getActivos();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getActivos() {
    this.activoService.getActivos().subscribe((data: Activo[]) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
  }

}
