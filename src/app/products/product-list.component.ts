import { Component } from "@angular/core";

@Component({
    selector: 'pm-products',
    templateUrl:"./product-list.component.html"
})
export class ProductListComponent{
    title: string = "Pizza List";
    imageWidth: number = 150;
    imageMargin: number = 2;
    showImage: boolean = false;
    filterList: string = 'type here';
    products: any[] = [
        {
            "productId":2,
            "productName": "Margerita",
            "productCode": "2",
            "productAvailability": "available to order",
            "productPrice": "10.99",
            "starRating": 3,
            "imageUrl":"assets/images/pizza.jpg"
        }
    ];

    toggleImage(): void {
        this.showImage = !this.showImage;
    }
};