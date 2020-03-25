# AngularCourse

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.4.

Angular Course
This project was generated with Angular CLI version 8.3.25. Al progetto è stata linkata la libreria Bootstrap v. 3.4.1
# Lezione 1
Obiettivi

    Capire come funziona un componente di Angular
    Capire la differenza tra binding unidirezionale e bidirezionale
    Imparare l'utilizzo di alcune espressioni come [ngStyle], [ngClass], {{ }}

## Componenti
success-alert

Un tag <p>.
warning-alert

Un tag che avverte l'utente di alcuni errori (generati dinamicamente nell'attributo numVulnerabilities). Se ci sono molti errori viene impostato a SEVERE l'attributo stSeverity, che si occupa di "lampeggiare" una parte del testo.

# Lezione 2
Obiettivi

    Imparare l'utilizzo di alcune espressioni come *ngIf, [(ngModel)]
    Imparare a utilizzare il binding tra proprietà HTML e variabili TS

## Componenti
server

È lo stato del server. Ad ogni istanza, genera in maniera casuale l'ID (serverID) e lo stato (serverStatus) (online/offline)  del server creato.
server-farm

È il componente che permette all'utente di creare nuovi server e di visualizzare tutti i server. I server sono all'interno del vettore servers: non sono però salvati i server, ma vengono semplicemente aggiunti valori casuali in maniera tale da generare esattamente il numero di server desiderato (questo perché l'istanza è scollegata da ciò che creiamo noi).
