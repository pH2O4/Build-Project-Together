import { Component, Input } from '@angular/core';
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

  NextProfessional(): void {}
}
