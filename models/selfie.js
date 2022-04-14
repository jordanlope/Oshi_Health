export class Selfie {
    constructor(imageUri) {
        this.imageUri = imageUri;
        this.year = new Date().getFullYear();
        this.month = new Date().getMonth();
        this.day = new Date().getDay();
        this.hour = new Date().getHours();
        this.minutes = new Date().getMinutes();
        this.id = new Date().toString() + Math.random().toString();
    }
}
