import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-historico',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './historico.component.html',
  styleUrls: ['./historico.component.scss']
})
export class HistoricoComponent implements OnInit {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.setupTimelineNavigation();
    }
  }

  setupTimelineNavigation() {
    if (!isPlatformBrowser(this.platformId)) return;

    const periodButtons = document.querySelectorAll('.timeline-period');
    const periodContents = document.querySelectorAll('.timeline-period-content');

    periodButtons.forEach(button => {
      button.addEventListener('click', () => {
        const periodId = button.getAttribute('data-period');

        // Remove active class from all buttons and contents
        periodButtons.forEach(btn => btn.classList.remove('active'));
        periodContents.forEach(content => content.classList.remove('active'));

        // Add active class to current button and content
        button.classList.add('active');
        const targetContent = document.getElementById(periodId!);
        if (targetContent) {
          targetContent.classList.add('active');
        }
      });
    });
  }
}