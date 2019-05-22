package com.loiane.springshoppingcart.repository;

import com.loiane.springshoppingcart.model.Product;
import org.springframework.data.mongodb.repository.ReactiveMongoRepository;

public interface ProductRepository 
    extends ReactiveMongoRepository<Product, String> {
}
