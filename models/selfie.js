export class Selfie {
    constructor(imageUri) {
        this.imageUri = imageUri;
        this.date = new Date().toString();
        this.time = new Date().toTimeString();
        this.id = new Date().toString() + Math.random().toString();
    }
}
