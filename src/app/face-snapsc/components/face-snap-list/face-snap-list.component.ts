import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FaceSnap } from '../../../core/models/face-snap.model';
import { FaceSnapsService } from '../../../core/services/face-snaps.service';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit {

  constructor(private faceSnapsService: FaceSnapsService) { }
  faceSnap!:FaceSnap[];
  faceSnap$!:Observable<FaceSnap[]>;

  ngOnInit(): void {
    // this.faceSnap = this.faceSnapsService.getAllFaceSnaps();
    this.faceSnap$=this.faceSnapsService.getAllFaceSnaps();
  }

}
