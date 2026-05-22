import { Component, OnInit } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonButton
} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { FakeStoreService } from '../services/fake-store.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonButton,
    CommonModule // Essencial para usarmos *ngIf e *ngFor
  ]
})
export class Tab3Page implements OnInit {
  produtos: any[] = []; // Armazena todos os produtos da API [cite: 31]
  exibirLista: boolean = false; // Controla a visibilidade da lista (suprimir/apresentar)

  constructor(private fakeStoreService: FakeStoreService) {}

  ngOnInit() {
      // Busca os produtos para já deixar o array carregado em memória
      this.fakeStoreService.getProducts().subscribe({
        next: (dados: any[]) => { // <-- Adicionamos : any[] aqui
          this.produtos = dados;
        },
        error: (erro: any) => {  // <-- Adicionamos : any aqui
          console.error('Erro ao carregar produtos na Tab 3:', erro);
        }
      });
    }

  // Ativa a exibição da lista completa
  mostrarLista() {
    this.exibirLista = true;
  }

  // Oculta (suprime) a lista da tela
  ocultarLista() {
    this.exibirLista = false;
  }
}
