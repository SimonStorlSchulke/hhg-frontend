import { AsyncPipe } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { StrapiService } from 'app/services/strapi.service';
import { CountUpModule } from 'ngx-countup';

export type ArticlePaypalButtonSection = {
  __component: 'article-section.paypal-button';
  background?: "nein" | "grün" | "beige";
};

@Component({
  selector: 'app-paypal-button-section',
  standalone: true,
  imports: [CountUpModule, AsyncPipe],
  templateUrl: './paypal-button-section.component.html',
  styleUrl: './paypal-button-section.component.scss',
})
export class PaypalButtonSectionComponent {
  @Input({ required: true }) sectionData!: ArticlePaypalButtonSection;

  orgaData$ = inject(StrapiService).getOrgaData();
}
