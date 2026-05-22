import { Component, OnInit } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonButton
} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { FakeStoreService } from '../services/fake-store.service';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonButton,
    CommonModule // Necessário para usarmos as diretivas estruturais como *ngIf
  ]
})
export class Tab2Page implements OnInit {
  produtos: any[] = []; // Array que vai armazenar a lista de produtos da API [cite: 31]
  indexAtual: number = 0; // Controla qual produto do array está visível na tela

  // Injetamos o nosso serviço no construtor
  constructor(private fakeStoreService: FakeStoreService) {}

  ngOnInit() {
      // Consome os dados da API assim que a página inicia
      this.fakeStoreService.getProducts().subscribe({
        next: (dados: any[]) => { // <-- Adicionamos : any[] aqui
          this.produtos = dados;
        },
        error: (erro: any) => {  // <-- Adicionamos : any aqui
          console.error('Erro ao buscar produtos na API:', erro);
        }
      });
    }

  // Avança para o próximo produto da lista
  proximo() {
    if (this.indexAtual < this.produtos.length - 1) {
      this.indexAtual++;
    }
  }

  // Retorna para o produto anterior da lista
  anterior() {
    if (this.indexAtual > 0) {
      this.indexAtual--;
    }
  }
}
