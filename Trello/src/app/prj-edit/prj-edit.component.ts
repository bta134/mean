import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-prj-edit',
  templateUrl: './prj-edit.component.html',
  styleUrls: ['./prj-edit.component.css']
})
export class PrjEditComponent implements OnInit {
  project: any = {};
  angForm: FormGroup;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private ps: ProjectService,
    private fb: FormBuilder) {
      this.createForm();
 }

  createForm() {
    this.angForm = this.fb.group({
        prj_name: ['', Validators.required ],
        prj_desc: ['', Validators.required ],
        priority: ['', Validators.required ]
      });
    }

    updateProject(prj_name, prj_desc, priority) {
      this.route.params.subscribe(params => {
         this.ps.updateProject(prj_name, prj_desc, priority, params['id']);
   });
  }
    ngOnInit() {
      this.route.params.subscribe(params => {
          this.ps.editProject(params['id']).subscribe(res => {
            this.project = res;
        });
      });
    }

}
