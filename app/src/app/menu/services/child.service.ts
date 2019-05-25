import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Child } from '../models/child'

const mockChild = [
  {
    id: 1,
    name: 'Marcelo Medeiros de Lima',
    birthDate: '18/09/1998',
    weight: '75',
    height: '176',
    previousConsultationDate: '12/12/2012'
  },
  {
    id: 2,
    name: 'Lorena Araujo',
    birthDate: '13/12/1975',
    weight: '87',
    height: '192',
    previousConsultationDate: '03/04/2015'
  },
  {
    id: 3,
    name: 'Pedro Carolino',
    birthDate: '13/12/1975',
    weight: '87',
    height: '192',
    previousConsultationDate: '03/04/2015'
  }
];

@Injectable({
  providedIn: 'root'
})
export class ChildService {

  constructor(private _http: HttpClient) { }

  async getChild(): Promise<Child[]> {
    return await of(mockChild).toPromise();
  }

  async getChildWithTerm(term: string): Promise<Child[]> {
    return mockChild.filter(child => {
      return child.name.toLowerCase().indexOf(term.toLowerCase()) > -1;
    });
  }

  async getChildId(id: number): Promise<Child[]> {
    return mockChild.filter(child => {
      return child.id == id;
    });
  }

}