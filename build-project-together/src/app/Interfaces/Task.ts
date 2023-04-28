import {ThemePalette} from '@angular/material/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

export interface Task {
    name: string;
    completed: boolean;
    color: ThemePalette;
    subtasks?: Task[];
    icon: IconProp;
  }
  