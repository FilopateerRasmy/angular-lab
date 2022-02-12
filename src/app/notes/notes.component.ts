import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { forbiddenNameValidator } from '../custom-validators/forbiddenname.validator';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
isDiscount = false;
notesForm=this.fb.group({
  name:['', [Validators.required, forbiddenNameValidator(/^admin$/), forbiddenNameValidator(/^adminstrator$/)]],
  discount: [''],
  comments:this.fb.array([])
})


  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  toggleInput(){
    this.isDiscount = !this.isDiscount;
    if(!this.isDiscount){
      this.notesForm.get('discount')?.clearValidators()
    }else{
      this.notesForm.get('discount')?.setValidators(Validators.required)

    }
    this.notesForm.get('discount')?.updateValueAndValidity()
  }
get comment(){
return (this.notesForm.get('comments') as FormArray)
}
  addComment(){
   this.comment.push(this.fb.control(""))
  }
}
