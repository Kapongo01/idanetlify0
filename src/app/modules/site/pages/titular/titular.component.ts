import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-perfil-titular',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './titular.component.html',
  styleUrls: ['./titular.component.scss']
})
export class TitularComponent implements OnInit {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.setupTabs();
    }
  }

  setupTabs() {
    if (!isPlatformBrowser(this.platformId)) return;

    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
      button.addEventListener('click', () => {
        const tabId = button.getAttribute('data-tab');

        // Remove active class from all buttons and contents
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));

        // Add active class to current button and content
        button.classList.add('active');
        const targetContent = document.getElementById(tabId!);
        if (targetContent) {
          targetContent.classList.add('active');
        }
      });
    });
  }
}