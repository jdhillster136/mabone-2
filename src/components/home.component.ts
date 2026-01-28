import { Component, ChangeDetectionStrategy } from '@angular/core';
import { HeroComponent } from './hero.component';
import { PartnersComponent } from './partners.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, PartnersComponent],
  template: `
    <app-hero />
    <app-partners />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {}