import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Project from '../project';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-project-get',
  templateUrl: './prj-get.component.html',
  styleUrls: ['./prj-get.component.css']
})
export class PrjGetComponent implements OnInit {

  projects: Project[];

  constructor(private route: ActivatedRoute,
    private router: Router, private ps: ProjectService) { }

  ngOnInit() {
    this.ps
      .getProjects()
      .subscribe((data: Project[]) => {
        this.projects = data;
    });
  }

  deleteProject(id) {
    this.ps.deleteProject(id).subscribe(res => {
      console.log('Deleted');
      this.router.navigate(['/project']);
    });
  }
}
