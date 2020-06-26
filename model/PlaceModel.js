import { Images } from "../constants/Images"

export class PlaceModel {
    constructor(id, name, city, adress, imgUrl,date) {
        this.id = id
        this.name = name
        this.city = city
        this.adress = adress
        this.imgUrl = imgUrl
        this.date = date
    }
}

