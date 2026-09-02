import { Injectable } from '@angular/core';

export interface IProduct {
  id: number;
  name: string;
  image: string;
  description: string;
  price: number;
  stock: number;
}

@Injectable({
  providedIn: 'root',
})

export class ProductsService {
    private products: IProduct[] = [
        {
            id: 1,
            name: "Formula 1 X Disney Monza 2026 Cars Francesco Bernoulli T-Shirt - Ivory - Unisex", 
            image: "https://images.footballfanatics.com/formula-1-merchandise/formula-1-x-disney-monza-2026-cars-francesco-bernoulli-t-shirt-ivory-unisex_ss5_p-204169245+pv-1+u-ldxdusnxaixyyt8fjlc8+v-32r0obk9q52yrjd7hjht.jpg?_hv=2&w=1018", 
            description: "Celebrate the racing spirit of the Formula 1 X Disney Monza 2026 Cars collection with this T-Shirt. Crafted from soft ring-spun cotton with a classic crew neck, it offers comfortable everyday wear for race weekends and beyond. Finished with distinctive graphics, it brings together the world of motorsport and Disney Pixar Cars in a versatile piece for any fan's wardrobe.",
            price: 50.00,
            stock: 400
        }
        ,
        {
            id: 2,
            name: "Formula 1 X Disney Fuel Racing Jacket - Green - Unisex", 
            image: "https://images.footballfanatics.com/formula-1-merchandise/formula-1-x-disney-fuel-racing-jacket-green-unisex_ss5_p-203969046+pv-1+u-uxqmpkxxr6kmowehfcgx+v-0lamboxmj0qvfinhlbbs.jpg?_hv=2&w=1018", 
            description: "Elevate your race weekend style with the ultimate official F1 team jacket. Built for fans who demand both performance and iconic aesthetic, this outerwear piece keeps you comfortable whether you're trackside in person or watching the Grand Prix from afar. Show off your team pride with unmistakable details designed for true motorsport purists.",
            price: 168.00,
            stock: 1000
        }
        ,
        {
            id: 3,
            name: "McLaren Lando Norris Team Baseball Cap - Papaya - Unisex", 
            image: "https://images.footballfanatics.com/mclaren-f1-team/mclaren-lando-norris-team-baseball-cap-papaya-unisex_ss5_p-203337101+pv-1+u-ozo72pszvkkt3impmvlu+v-4r7dgot72xcsqoln1vpe.png?_hv=2&w=1018", 
            description: "Show your support for the McLaren F1 Team and Lando Norris through 2026 with the official team apparel range from Puma. When he climbs into his cockpit for the next race in the calendar, make sure you're kitted out in style to cheer him on, whether you're trackside in person or watching from afar. The iconic colours and instantly recognisable team emblem will stand out wherever you are.",
            price: 43.00,
            stock: 456
        }
        ,
        {
            id: 4,
            name: "Ayrton Senna Nacional 1984 Original Cap with Cap Case", 
            image: "https://images.footballfanatics.com/ayrton-senna/ayrton-senna-nacional-1984-original-cap-with-cap-case_ss5_p-202461394+pv-1+u-r2gaednurjzqokmfoet4+v-galddg6vxckhbkl7gvlu.jpg?_hv=2&w=1018", 
            description: "With 3 Drivers' Championship titles and 41 Grand Prix victories across his career, Ayrton Senna is rightly revered as one of – if not the – greatest F1 drivers of all time. This collection pays homage to his legacy, his achievements, and his place at the pinnacle of Formula One history.",
            price: 40.00,
            stock: 500
        }
    ]
    getProducts() {
    return this.products;
  }
  getProductById(id: number) {
    return this.products.find(p => p.id === id);
  }
}
