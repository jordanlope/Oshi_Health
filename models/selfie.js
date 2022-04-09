class Selfie {
    constructor(imageUri, date, time) {
        this.imageUri = imageUri;
        this.date = date;
        this.time = time;
        this.id = new Date().toString() + Math.random().toString();
    }
}