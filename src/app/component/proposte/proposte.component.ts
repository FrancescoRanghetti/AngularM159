import { Component } from '@angular/core';

@Component({
  selector: 'app-proposte',
  templateUrl: './proposte.component.html',
  styleUrls: ['./proposte.component.css']
})
export class ProposteComponent {

}

window.addEventListener('DOMContentLoaded', (event) => {
  const form = document.getElementById('topicForm') as HTMLFormElement;

  form.onsubmit = function(e) {
    e.preventDefault();  // non so cosa faccia ma consigliano di metterlo

    const topic = (document.getElementById('topic') as HTMLInputElement).value;
    const description = (document.getElementById('description') as HTMLTextAreaElement).value;

    console.log('Tema:', topic);
    console.log('Descrizione:', description);

    // non ho capito una sega di come si mette la roba nel server
  };
});

