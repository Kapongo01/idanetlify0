import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  mobileMenuOpen = false;
  mobileSubmenus: { [key: string]: boolean } = {
    'sobre-mobile': false,
    'programas-mobile': false,
    'midias-mobile': false
  };

  // Controlar Mega Menus
  openMegaMenu(menuId: string) {
    this.closeAllMegaMenus();
    const megaMenu = document.getElementById(`${menuId}-mega`);
    if (megaMenu) {
      megaMenu.classList.add('active');
    }
  }

  closeMegaMenu(menuId: string) {
    setTimeout(() => {
      const megaMenu = document.getElementById(`${menuId}-mega`);
      if (megaMenu) {
        megaMenu.classList.remove('active');
      }
    }, 100);
  }

  closeAllMegaMenus() {
    const megaMenus = document.querySelectorAll('.mega-menu');
    megaMenus.forEach(menu => menu.classList.remove('active'));
  }

  // Controlar Mobile Menu
  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
    if (this.mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  closeMobileMenu() {
    this.mobileMenuOpen = false;
    document.body.style.overflow = '';
    // Fechar todos os submenus mobile
    Object.keys(this.mobileSubmenus).forEach(key => {
      this.mobileSubmenus[key] = false;
    });
  }

  toggleMobileSubmenu(submenuId: string) {
    this.mobileSubmenus[submenuId] = !this.mobileSubmenus[submenuId];

    // Fechar outros submenus
    Object.keys(this.mobileSubmenus).forEach(key => {
      if (key !== submenuId) {
        this.mobileSubmenus[key] = false;
      }
    });
  }

  // Fechar menus ao clicar fora
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;

    // Se o clique não foi em um trigger de mega menu, fechar todos
    if (!target.closest('.nav-mega') && !target.closest('.mega-menu')) {
      this.closeAllMegaMenus();
    }
  }

  // Fechar menus ao pressionar ESC
  @HostListener('document:keydown.escape')
  onEscapePress() {
    this.closeAllMegaMenus();
    this.closeMobileMenu();
  }

  // Fechar menus ao rolar a página
  @HostListener('window:scroll')
  onWindowScroll() {
    this.closeAllMegaMenus();
  }
}