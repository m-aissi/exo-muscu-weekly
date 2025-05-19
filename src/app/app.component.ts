import { Component } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as exoDispo from '../assets/exoDispo.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit {
  title = 'muscle-groups';
  listeExoSemaine: any[] = [];
  fileContent: string = '';
  listeExoDisponible: any[] = [];
  exoDisponibles: any = exoDispo;

  constructor() {} // Inject HttpClient

  ngAfterViewInit(): void {

    this.populateExoDispo();
    
    
    // this.fileContent = JSON.stringify(exoDispo, null, 2);
    this.calculJailTime(8, 16, 11);
  }

  initColors(color: string) {
    const trapeziusElements = document.querySelectorAll('#Trapezius path');
    trapeziusElements.forEach((element: Element) => {
      (element as HTMLElement).style.fill = color;
      (element as HTMLElement).style.stroke = "black";
      (element as HTMLElement).style.strokeWidth = "0.5px";
      (element as HTMLElement).style.strokeLinejoin = "round";
    });
    const Lats = document.querySelectorAll('#Lats path');
    Lats.forEach((element: Element) => {
      (element as HTMLElement).style.fill = color;
      (element as HTMLElement).style.stroke = "black";
      (element as HTMLElement).style.strokeWidth = "0.5px";
      (element as HTMLElement).style.strokeLinejoin = "round";
    });
    const Triceps = document.querySelectorAll('#Triceps path');
    Triceps.forEach((element: Element) => {
      (element as HTMLElement).style.fill = color;
      (element as HTMLElement).style.stroke = "black";
      (element as HTMLElement).style.strokeWidth = "0.5px";
      (element as HTMLElement).style.strokeLinejoin = "round";
    });
    const Glutes = document.querySelectorAll('#Glutes path');
    Glutes.forEach((element: Element) => {
      (element as HTMLElement).style.fill = color;
      (element as HTMLElement).style.stroke = "black";
      (element as HTMLElement).style.strokeWidth = "0.5px";
      (element as HTMLElement).style.strokeLinejoin = "round";
    });
    const Hamstrings = document.querySelectorAll('#Hamstrings path');
    Hamstrings.forEach((element: Element) => {
      (element as HTMLElement).style.fill = color;
      (element as HTMLElement).style.stroke = "black";
      (element as HTMLElement).style.strokeWidth = "0.5px";
      (element as HTMLElement).style.strokeLinejoin = "round";
    });    
    const Calves = document.querySelectorAll('#Calves path');
    Calves.forEach((element: Element) => {
      (element as HTMLElement).style.fill = color;
      (element as HTMLElement).style.stroke = "black";
      (element as HTMLElement).style.strokeWidth = "0.5px";
      (element as HTMLElement).style.strokeLinejoin = "round";
    });    
    const biceps = document.querySelectorAll('#biceps path');
    biceps.forEach((element: Element) => {
      (element as HTMLElement).style.fill = color;
      (element as HTMLElement).style.stroke = "black";
      (element as HTMLElement).style.strokeWidth = "0.5px";
      (element as HTMLElement).style.strokeLinejoin = "round";
    });    
    const Deltoids = document.querySelectorAll('#Deltoids path');
    Deltoids.forEach((element: Element) => {
      (element as HTMLElement).style.fill = color;
      (element as HTMLElement).style.stroke = "black";
      (element as HTMLElement).style.strokeWidth = "0.5px";
      (element as HTMLElement).style.strokeLinejoin = "round";
    });    
    const Abs = document.querySelectorAll('#Abs path');
    Abs.forEach((element: Element) => {
      (element as HTMLElement).style.fill = color;
      (element as HTMLElement).style.stroke = "black";
      (element as HTMLElement).style.strokeWidth = "0.5px";
      (element as HTMLElement).style.strokeLinejoin = "round";
    });
    const Obliques = document.querySelectorAll('#Obliques path');
    Obliques.forEach((element: Element) => {
      (element as HTMLElement).style.fill = color;
      (element as HTMLElement).style.stroke = "black";
      (element as HTMLElement).style.strokeWidth = "0.5px";
      (element as HTMLElement).style.strokeLinejoin = "round";
    });
    const Pectorals = document.querySelectorAll('#Pectorals path');
    Pectorals.forEach((element: Element) => {
      (element as HTMLElement).style.fill = color;
      (element as HTMLElement).style.stroke = "black";
      (element as HTMLElement).style.strokeWidth = "0.5px";
      (element as HTMLElement).style.strokeLinejoin = "round";
    });
    const Quads = document.querySelectorAll('#Quads path');
    Quads.forEach((element: Element) => {
      (element as HTMLElement).style.fill = color;
      (element as HTMLElement).style.stroke = "black";
      (element as HTMLElement).style.strokeWidth = "0.5px";
      (element as HTMLElement).style.strokeLinejoin = "round";
      
    });
    const Forearms = document.querySelectorAll('#Forearms path');
    Forearms.forEach((element: Element) => {
      (element as HTMLElement).style.fill = color;
      (element as HTMLElement).style.stroke = "black";
      (element as HTMLElement).style.strokeWidth = "0.5px";
      (element as HTMLElement).style.strokeLinejoin = "round";
    });
    const Adductors = document.querySelectorAll('#Adductors path');
    Adductors.forEach((element: Element) => {
      (element as HTMLElement).style.fill = color;
      // on ajoute un border de 1px solid black
      (element as HTMLElement).style.stroke = "black";
      (element as HTMLElement).style.strokeWidth = "0.5px";
      (element as HTMLElement).style.strokeLinejoin = "round";
    });
  }

  selectExo(item : any) {
    //on push l'exo dans la liste des exos de la semaine
    this.listeExoSemaine.push(item);
    this.changeMuscleColor();
  }
  changeColor(muscle: string, color : string) {
    if (muscle == "biceps") {
      const biceps = document.querySelectorAll('#biceps path');
      biceps.forEach((element: Element) => {
        (element as HTMLElement).style.fill = color;
      }); 
    }
    if (muscle == "trapeze") {
      const trapeziusElements = document.querySelectorAll('#Trapezius path');
      trapeziusElements.forEach((element: Element) => {
        (element as HTMLElement).style.fill = color;
      });
    }
    if (muscle == "triceps") {
      const Triceps = document.querySelectorAll('#Triceps path');
      Triceps.forEach((element: Element) => {
        (element as HTMLElement).style.fill = color;
      });
    }
    if (muscle == "epaule") {
      const Deltoids = document.querySelectorAll('#Deltoids path');
      Deltoids.forEach((element: Element) => {
        (element as HTMLElement).style.fill = color;
      });
    }
    if (muscle == "pecs") {
      const Pectorals = document.querySelectorAll('#Pectorals path');
      Pectorals.forEach((element: Element) => {
        (element as HTMLElement).style.fill = color;
      });
    }
    if (muscle == "dos") {
      const Lats = document.querySelectorAll('#Lats path');
      Lats.forEach((element: Element) => {
        (element as HTMLElement).style.fill = color;
      });
    }
  }
  resetExoSemanie() {
    this.listeExoSemaine = [];
    this.initColors("#FEF3E2");
  }

  changeMuscleColor() {
    
    const musclesPresent: { [key: string]: number } = {};

    this.listeExoSemaine.forEach(exo => {
      exo.muscle.forEach((muscle: string) => {
      if (musclesPresent[muscle]) {
        musclesPresent[muscle]++;
      } else {
        musclesPresent[muscle] = 1;
      }
      });
  
      console.log(musclesPresent);
    });

  for (const muscle in musclesPresent) {
    console.log("salut", muscle);
    console.log(musclesPresent[muscle]);
    console.log(musclesPresent);
    if (musclesPresent[muscle] == 1) {
      this.changeColor(muscle, "yellow");
      console.log("yellow");
    }
    else if (musclesPresent[muscle] == 2) {
      this.changeColor(muscle, "orange");
      console.log("orange");
    }
    else if (musclesPresent[muscle] > 2) {
      this.changeColor(muscle, "red");
    }
  }
  }

  calculJailTime(kill : number, death : number, assist : number) {
    let jailTime = 0;
    jailTime = (death *5) - (kill) - (assist/2);
    
    let jailTimeString = jailTime.toString();
    let jailTimeSplit = jailTimeString.split(".");
    let minutes = jailTimeSplit[0];
    let secondsstring = jailTimeSplit[1];
    let seconds = parseInt(secondsstring) * 60 / 10 ;
    console.log("Jail Time : " + minutes + " minutes " + seconds + " seconds");
  }

  
  populateExoDispo() {
    for (const exo of this.exoDisponibles.default) {
      this.listeExoDisponible.push(exo);
    }
  }

  exportExoSemaine() {
    const data = JSON.stringify(this.listeExoSemaine, null, 2);
    const blob = new Blob([data], { type: 'application/json' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'exoSemaine.json';
    a.click();
    window.URL.revokeObjectURL(url);
  }


  
  importExoDispo() {
    //on demande a l'utilisateur de selectionner un fichier
    const input = document.createElement('input');
    input.type = 'file';
    input.onchange = e => {
      //on recupere le fichier
      const file = (e.target as HTMLInputElement).files![0];
      //on cree un objet FileReader
      const reader = new FileReader();
      reader.onload = () => {
        //on lit le fichier
        const result = reader.result as string;
        //on parse le fichier en json
        const json = JSON.parse(result);
        //on affiche le json dans la console
        console.log(json);
      };
      reader.readAsText(file);
    };
    input.click();
  }

  exportExoDispo() {
    //on transforme la liste des exos dispo en json
    const data = JSON.stringify(this.exoDisponibles, null, 2);
    //on cree un blob avec le json
    const blob = new Blob([data], { type: 'application/json' });
    //on cree un URL avec le blob
    const url = window.URL.createObjectURL(blob);
    //on cree un element a
    const a = document.createElement('a');
    //on donne l'url a l'element a
    a.href = url;
    //on donne un nom au fichier
    a.download = 'exoDispo.json';
    //on simule un click sur l'element a
    a.click();
    //on supprime l'url
    window.URL.revokeObjectURL(url);
  }


    
  importExoSemaine() {
    const input = document.createElement('input');
    input.type = 'file';
    input.onchange = e => {
      const file = (e.target as HTMLInputElement).files![0];
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result as string;
        this.listeExoSemaine = JSON.parse(result);
        this.changeMuscleColor();
      };
      reader.readAsText(file);
    };
    input.click();
  }

}