package com.loiane.springshoppingcart.repository;

import com.loiane.springshoppingcart.model.Order;
import org.springframework.data.mongodb.repository.ReactiveMongoRepository;

public interface OrderRepository extends ReactiveMongoRepository<Order, String> {
}
