import { Component } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import e from 'express';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit {
  title = 'muscle-groups';
  listeExoSemaine: any[] = [];
  //on declare liste exo semaine comme une array de string vide
  fileContent: string = '';
  listeExoDisponible: any[] = [];

  ngAfterViewInit(): void {

    // on push lexo curl qui travail bicep avec name = curl et muscle on a biceps et trapeze dans muscle c'est une array
    this.listeExoDisponible.push({name: "Bench Press", muscle: ["pecs"]});
    this.listeExoDisponible.push({name: "Bench Press Incliné", muscle: ["pecs"]});
    this.listeExoDisponible.push({name: "Bench Press Décliné", muscle: ["pecs"]});
    this.listeExoDisponible.push({name: "Dev Militaire", muscle: ["epaule"]});
    this.listeExoDisponible.push({name: "Elevation Latérales", muscle: ["epaule"]});
    this.listeExoDisponible.push({name: "Triceps Corde", muscle: ["triceps"]});
    this.listeExoDisponible.push({name: "Facepull", muscle: ["epaules"]});

    this.listeExoDisponible.push({name: "Rowing Barre", muscle: ["dos"]});
    this.listeExoDisponible.push({name: "Tirage Horizontal", muscle: ["dos"]});
    this.listeExoDisponible.push({name: "Curl Barre", muscle: ["biceps"]});
    this.listeExoDisponible.push({name: "Curl Marteau", muscle: ["biceps"]});
    this.listeExoDisponible.push({name: "Shrugs", muscle: ["trapeze"]});

    this.calculJailTime(5, 10, 4);
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

}