import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators'; // <-- essencial

@Component({
  selector: 'app-estatuto-organico',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './estatuto.component.html',
  styleUrls: ['./estatuto.component.scss']
})
export class EstatutoComponent implements OnInit {

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit() {
    // Só roda no browser
    if (isPlatformBrowser(this.platformId)) {
      // Sempre que entrar na página, vai para o topo
      this.router.events
        .pipe(filter(event => event instanceof NavigationEnd))
        .subscribe(() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        });

      this.setupScrollSpy();
    }
  }

  setupScrollSpy() {
    if (!isPlatformBrowser(this.platformId)) return;

    const sections = document.querySelectorAll('.statute-section');
    const navLinks = document.querySelectorAll('.sidebar-link');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${id}`) {
              link.classList.add('active');
            }
          });
        }
      });
    }, { threshold: 0.5 });

    sections.forEach(section => {
      observer.observe(section);
    });
  }

  scrollToSection(sectionId: string) {
    if (!isPlatformBrowser(this.platformId)) return;

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}