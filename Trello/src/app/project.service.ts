import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  uri = 'http://localhost:4000/project';

  constructor(private http: HttpClient) { }

  addProject(prj_name, prj_desc, priority) {
    const obj = {
      prj_name: prj_name,
      prj_desc: prj_desc,
      priority: priority
    };
    console.log(obj);
    this.http.post(`${this.uri}/add`, obj)
        .subscribe(res => window.location.href = '/project');
  }

  getProjects() {
    return this
           .http
           .get(`${this.uri}`);
  }

  editProject(id) {
    return this
            .http
            .get(`${this.uri}/edit/${id}`);
    }
  
  updateProject(prj_name, prj_desc, priority, id) {

      const obj = {
          prj_name: prj_name,
          prj_desc: prj_desc,
          priority: priority
        };
      this
        .http
        .post(`${this.uri}/update/${id}`, obj)
        .subscribe(res => window.location.href = '/project');
    }
  
    deleteProject(id) {
      return this
                .http
                .get(`${this.uri}/delete/${id}`);
    }
}
