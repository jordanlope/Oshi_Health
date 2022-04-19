export class Selfie {
    constructor(imageUri) {
        this.imageUri = imageUri;
        this.year = new Date().getFullYear();
        this.month = new Date().getMonth() + 1;
        this.day = new Date().getDate();
        this.hour = new Date().getHours();
        this.minutes = new Date().getMinutes();
        this.id = new Date().toString() + Math.random().toString();
        this.date = new Date().getTime();
    }

    getTime() {
        const minutes = (this.minutes < 10 ? `0${this.minutes}` : `${this.minutes}`);
        const time = (this.hour > 12 ? `${(this.hour-12).toString()}:${minutes}pm` : `${(this.hour).toString()}:${minutes}am`);
        return time;
    }

    getDate() {
        const date = `${this.month}/${this.day}/${this.year}`
        return date;
    }
}
