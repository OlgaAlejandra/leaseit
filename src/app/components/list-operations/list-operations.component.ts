import { UserService } from './../../services/user.service';
import { User } from './../../models/user';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Operation } from 'src/app/models/operation';
import { OperationService } from 'src/app/services/operation.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-operations',
  templateUrl: './list-operations.component.html',
  styleUrls: ['./list-operations.component.css']
})
export class ListOperationsComponent implements OnInit {
  displayedColumns: string[] = ['id','activo','arrendador','tiempo','actions'];
  dataSource = new MatTableDataSource<Operation>();
  operaciones!: Operation[];
  user!:User

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  constructor(private operationService: OperationService, private userService: UserService,
    public route: ActivatedRoute) {}
  ngOnInit(): void {
    const variable = this.route.snapshot.paramMap.get('id');
    this.userService.getUserId(this.route.snapshot.paramMap.get('id')).subscribe((data)=>{
      this.user=data;
    })
    this.getOperations();
  }
  getOperations(){
    this.operationService.getOperations().subscribe((data: Operation[]) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
  
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  router(){

  }
}
