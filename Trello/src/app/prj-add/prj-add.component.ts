import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { ProjectService } from '../project.service';
@Component({
  selector: 'app-prj-add',
  templateUrl: './prj-add.component.html',
  styleUrls: ['./prj-add.component.css']
})
export class PrjAddComponent implements OnInit {
  angForm: FormGroup;
  constructor(private fb: FormBuilder, private ps: ProjectService) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      prj_name: ['', Validators.required ],
      prj_desc: ['', Validators.required ],
      priority: ['', Validators.required ]
    });
  }

  addProject(prj_name, prj_desc, priority) {
    this.ps.addProject(prj_name, prj_desc, priority);
  }

  ngOnInit() {
  }

}
