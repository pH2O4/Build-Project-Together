import { Component, Input } from '@angular/core';
import { Professional } from '../../Interfaces/Profissional';
import { MatListModule } from '@angular/material/list';

import {
  faFaceSmile,
  faFaceTired,
  faFaceAngry,
  faCircleChevronRight,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-secound-step',
  templateUrl: './secound-step.component.html',
  styleUrls: ['./secound-step.component.css'],
})
export class SecoundStepComponent {
  @Input() Professionals: string[] = [''];
  currentProfessionalSelection = 0;
  faCircleChevronRight = faCircleChevronRight;
  showNextButton = false;

  professionals: Professional[] = [
    new Professional
  ];

  NextProfessional(): void {}
}
