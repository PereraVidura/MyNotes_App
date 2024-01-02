import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NOTES } from '../notes-list/notes';

@Component({
  selector: 'app-note-details',
  templateUrl: './note-details.component.html',
  styleUrl: './note-details.component.css'
})

export class NoteDetailsComponent {
  
  activeRoute = inject(ActivatedRoute);
  id = Number(this.activeRoute.snapshot.paramMap.get('id'));

  note = NOTES.find((i) => i.id === this.id);

  constructor(private router: Router) {} // Inject Router


  deleteNote(): void {
    if (this.note) {
      const index = NOTES.indexOf(this.note, 0);
      if (index > -1) {
        NOTES.splice(index, 1);
        this.router.navigate(['/']); // Navigate back to the notes list page
      }
    }
  }

  editNote(): void {
    if (this.note) {
      this.router.navigate(['/edit', this.note.id]);
    }
  }
}