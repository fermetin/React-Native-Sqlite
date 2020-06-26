import { Images } from "../constants/Images"

export class PlaceModel {
    constructor(id, name, city, adress, lat, lng, imgUrl, date) {
        this.id = id
        this.name = name
        this.city = city
        this.adress = adress
        this.lat = lat
        this.lng = lng
        this.imgUrl = imgUrl
        this.date = date
    }
}

