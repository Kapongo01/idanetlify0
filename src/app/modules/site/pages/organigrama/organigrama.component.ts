import { Component, OnInit, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-organigrama',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './organigrama.component.html',
  styleUrls: ['./organigrama.component.scss']
})
export class OrganigramaComponent implements OnInit, AfterViewInit {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    // Inicialização do componente
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.setupOrganigramInteractions();
      this.setupViewControls();
    }
  }

  setupOrganigramInteractions() {
    if (!isPlatformBrowser(this.platformId)) return;

    const toggleButtons = document.querySelectorAll('.toggle-btn');
    toggleButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        e.stopPropagation();
        const targetId = button.getAttribute('data-target');
        const target = document.getElementById(targetId!);
        if (target) {
          target.classList.toggle('active');
          button.classList.toggle('active');
        }
      });
    });

    const zoomInBtn = document.getElementById('zoomIn');
    const zoomOutBtn = document.getElementById('zoomOut');
    const resetBtn = document.getElementById('resetView');

    let scale = 1;

    zoomInBtn?.addEventListener('click', () => {
      if (scale < 1.5) { scale += 0.1; this.updateZoom(scale); }
    });

    zoomOutBtn?.addEventListener('click', () => {
      if (scale > 0.6) { scale -= 0.1; this.updateZoom(scale); }
    });

    resetBtn?.addEventListener('click', () => {
      scale = 1; this.updateZoom(scale);
    });
  }

  updateZoom(scale: number) {
    if (!isPlatformBrowser(this.platformId)) return;

    const organigramContainer = document.querySelector('.organigram-container');
    if (organigramContainer) {
      (organigramContainer as HTMLElement).style.transform = `scale(${scale})`;
    }
  }

  setupViewControls() {
    if (!isPlatformBrowser(this.platformId)) return;

    const viewButtons = document.querySelectorAll('.control-btn[data-view]');
    const views = document.querySelectorAll('.organigram-view');

    viewButtons.forEach(button => {
      button.addEventListener('click', () => {
        const viewType = button.getAttribute('data-view');

        viewButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        views.forEach(view => view.classList.remove('active'));
        const targetView = document.getElementById(`${viewType}View`);
        if (targetView) targetView.classList.add('active');
      });
    });
  }

  exportAsImage() {
    if (!isPlatformBrowser(this.platformId)) return;
    console.log('Exporting organigram as image...');
  }

  printOrganigram() {
    if (!isPlatformBrowser(this.platformId)) return;
    window.print();
  }
}