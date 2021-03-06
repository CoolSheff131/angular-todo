import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { TestData } from '../data/TestData';
import { Category } from '../model/Category';
import { Task } from '../model/Task';

@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {

  tasksSubject = new BehaviorSubject<Task[]>(TestData.tasks);
  categoriesSubject = new BehaviorSubject<Category[]>(TestData.categories);

  constructor() {

   }


  // getCategories(): Category[]{
  //   return TestData.categories
  // }

  fillTasks(){
    this.tasksSubject.next(TestData.tasks)
  }

  fillTasksByCategory(category: Category){
    const tasks = TestData.tasks.filter(task => task.category === category)
    this.tasksSubject.next(tasks)
  }
}
