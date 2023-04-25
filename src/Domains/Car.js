"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Car {
    constructor(car) {
        this.id = car.id;
        this.model = car.model;
        this.year = car.year;
        this.color = car.color;
        this.status = car.status;
        this.buyValue = car.buyValue;
        this.doorsQty = car.doorsQty;
        this.seatsQty = car.seatsQty;
    }
    setId(id) {
        this.id = id;
    }
    getId() {
        return this.id;
    }
    setModel(model) {
        this.model = model;
    }
    getModel() {
        return this.model;
    }
    setYear(year) {
        this.year = year;
    }
    getYear() {
        return this.year;
    }
    setColor(color) {
        this.color = color;
    }
    getColor() {
        return this.color;
    }
    setStatus(status) {
        if (status) {
            this.status = true;
        }
    }
    getStatus() {
        return this.status;
    }
    setBuyValue(buyValue) {
        this.buyValue = buyValue;
    }
    getBuyValue() {
        return this.buyValue;
    }
    setDoorsQty(doorsQty) {
        this.doorsQty = doorsQty;
    }
    getDoorsQty() {
        return this.doorsQty;
    }
    setSeatsQty(seatsQty) {
        this.seatsQty = seatsQty;
    }
    getSeatsQty() {
        return this.seatsQty;
    }
}
exports.default = Car;
