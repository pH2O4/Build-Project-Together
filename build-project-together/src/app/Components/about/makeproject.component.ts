import { Component } from '@angular/core';


@Component({
  selector: 'make-project',
  templateUrl: './makeproject.component.html',
  styleUrls: ['./makeproject.component.css']
})
export class MakeProjectComponent {
  myOptions = [
    { label: 'Saúde', value: 'Saúde' },
    { label: 'Marketing Digital', value: 'Marketing Digital' },
    { label: 'TI', value: 'TI' }
  ];
  
  selectedOption = ''
}
