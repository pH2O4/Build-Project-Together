import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Task } from '../../Interfaces/Task';
import {
  faFaceSmile,
  faFaceTired,
  faFaceAngry,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'make-project',
  templateUrl: './makeproject.component.html',
  styleUrls: ['./makeproject.component.css'],
})
export class MakeProjectComponent {
  faFaceSmile = faFaceSmile;
  faFaceTired = faFaceTired;
  faFaceAngry = faFaceAngry;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  fruitCtrl = new FormControl('');
  filteredFruits: Observable<string[]>;
  fruits: string[] = ['Social Media'];
  allFruits: string[] = [
    'Gerente de RH',
    'Gestore de Tráfego',
    'Contador',
    'DevOps',
    'Desenvolvedor Java',
    'Social Midia'
  ];
  myOptions = [
    { label: 'Saúde', value: 'Saúde' },
    { label: 'Marketing Digital', value: 'Marketing Digital' },
    { label: 'TI', value: 'TI' },
  ];
  selectedOption = '';

  @ViewChild('fruitInput') fruitInput!: ElementRef<HTMLInputElement>;

  constructor() {
    this.filteredFruits = this.fruitCtrl.valueChanges.pipe(
      startWith(null),
      map((fruit: string | null) =>
        fruit ? this._filter(fruit) : this.allFruits.slice()
      )
    );
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.fruits.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();

    this.fruitCtrl.setValue(null);
  }

  remove(fruit: string): void {
    const index = this.fruits.indexOf(fruit);
    console.log('teste');

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    if (this.fruits.length <= 2) {
      this.fruits.push(event.option.viewValue);
    }
    this.fruitInput.nativeElement.value = '';
    this.fruitCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allFruits.filter((fruit) =>
      fruit.toLowerCase().includes(filterValue)
    );
  }

  task: Task = {
    name: 'Modalidades',
    completed: false,
    color: 'primary',
    subtasks: [
      { name: 'Remoto', completed: false, color: 'primary', icon: faFaceSmile },
      { name: 'Hibrido', completed: false, color: 'accent', icon: faFaceTired },
      {
        name: 'Presencial',
        completed: false,
        color: 'warn',
        icon: faFaceAngry,
      },
    ],
    icon: faFaceSmile,
  };

  allComplete: boolean = false;

  updateAllComplete() {
    this.allComplete =
      this.task.subtasks != null &&
      this.task.subtasks.every((t) => t.completed);
  }

  someComplete(): boolean {
    if (this.task.subtasks == null) {
      return false;
    }
    return (
      this.task.subtasks.filter((t) => t.completed).length > 0 &&
      !this.allComplete
    );
  }

  setAll(completed: boolean) {
    this.allComplete = completed;
    if (this.task.subtasks == null) {
      return;
    }
    this.task.subtasks.forEach((t) => (t.completed = completed));
  }

  teste(): void {
    console.log('TESTE');
  }
}