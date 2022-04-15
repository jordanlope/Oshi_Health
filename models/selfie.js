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

    getTime() {
        const time = (this.hour > 12 ? `${(this.hour-12).toString()}:${this.minutes}pm` : `${(this.hour).toString()}:${this.minutes}am`);
        return time;
    }

    getDate() {
        const date = `${this.day}/${this.month}/${this.year}`
        return date;
    }
}
