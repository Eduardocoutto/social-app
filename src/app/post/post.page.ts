import { AngularFirestore } from '@angular/fire/firestore';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'],
})
export class PostPage implements OnInit {
  postID: string
  post
  constructor(private route: ActivatedRoute, private afs: AngularFirestore) {
   }

  ngOnInit() {
    this.postID = this.route.snapshot.paramMap.get('id')
    this.post = this.afs.doc(`post/${this.postID}`).valueChanges()
  }
}
