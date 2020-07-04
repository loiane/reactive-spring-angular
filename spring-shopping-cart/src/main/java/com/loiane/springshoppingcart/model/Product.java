package com.loiane.springshoppingcart.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Document(collection = "products")
public class Product {

    @Id
    private String id;

    private String name;
    private String description;
    private Double price;
    private String image;
    private String status;
    private String discounted;
    private Double discount;
}
