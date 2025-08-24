import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedataService {
  sharedData: any;
  sum;
  bucket = [];

  constructor() { }

  setShareData(data: any) {
    this.sharedData = data;
  }
  getSharedData() {
    return this.sharedData;
  }
  setBucket(data) {
    this.bucket.push(data);
  }
  getBucket() {
    return this.bucket;
  }

  setsum(x) {
    this.sum = x;
  }
}
