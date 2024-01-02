import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NOTES } from '../notes-list/notes';

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrl: './edit-note.component.css'
})

export class EditNoteComponent {

  activeRoute = inject(ActivatedRoute);
  id = Number(this.activeRoute.snapshot.paramMap.get('id'));

  note = NOTES.find((i) => i.id === this.id);

  editNoteForm = new FormGroup({
    title: new FormControl('', Validators.required),
    text: new FormControl(''),
  });

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Populate the form with the existing note data
    if (this.note) {
      this.editNoteForm.setValue({
        title: this.note.title!,
        text: this.note.text!,
      });
    }
  }

  updateNote(): void {
    if (this.note && this.editNoteForm.valid) {
      this.note.title = this.editNoteForm.value.title!;
      this.note.text = this.editNoteForm.value.text!;

      // Optional: You may want to update the note in a centralized service
      // instead of directly modifying the NOTES array.

      this.router.navigate(['/note', this.note.id]);
    }
  }
}