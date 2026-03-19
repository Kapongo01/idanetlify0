import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FeaturedComponent } from '../../components/featured/featured.component';
import { MissionComponent } from '../../components/mission/mission.component';
import { IniciativaComponent } from '../../components/iniciativa/iniciativa.component';
import { NewsComponent } from '../../components/news/news.component';
import { StatsComponent } from '../../components/stats/stats.component';
import { ProjectosComponent } from '../../components/projectos/projectos.component';
import { HeroComponent } from '../../components/hero/hero.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule,HeroComponent, FeaturedComponent, MissionComponent, IniciativaComponent, NewsComponent, StatsComponent, ProjectosComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  {
}