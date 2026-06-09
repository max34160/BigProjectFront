import { Component, OnInit, signal } from '@angular/core';
import { GlobalService } from '../../services/global';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import * as API from '../../lib/api';

@Component({
  selector: 'app-profil-pro',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, MatFormFieldModule, MatSelectModule, FormsModule, RouterLink],
  templateUrl: './profil-pro.html',
  styleUrl: './profil-pro.scss',
})
export class ProfilPro implements OnInit {
  methodos = signal<any[]>([]);
  allMethodos = signal<any[]>([]);
  selectedMethodoId: number | null = null;

  constructor(public global: GlobalService) {}

  async ngOnInit() {
    const all = await API.getAllMethodologie();
    this.allMethodos.set(all);
    await this.loadMethodos();
  }

  async loadMethodos() {
    if (!this.global.pro?.id_pro) return;
    const result = await API.getOneByPro(String(this.global.pro.id_pro));
    this.methodos.set(result.exercer ?? []);
  }

  methodoTitle(id_methodo: number): string {
    const m = this.allMethodos().find((m: any) => m.id_methodo === id_methodo);
    return m?.titre ?? 'Inconnue';
  }

  get availableMethodos(): any[] {
    const assigned = new Set(this.methodos().map((e: any) => e.id_methodo));
    return this.allMethodos().filter((m: any) => !assigned.has(m.id_methodo));
  }

  async addMethodo() {
    if (!this.selectedMethodoId || !this.global.pro?.id_pro) return;
    await API.addNewExercer(String(this.global.pro.id_pro), String(this.selectedMethodoId));
    this.selectedMethodoId = null;
    await this.loadMethodos();
  }

  async removeMethodo(id_methodo: number) {
    if (!this.global.pro?.id_pro) return;
    await API.removeExercer(String(this.global.pro.id_pro), String(id_methodo));
    await this.loadMethodos();
  }
}
