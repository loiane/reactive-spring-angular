package com.loiane.springshoppingcart.controller;

import com.loiane.springshoppingcart.model.Product;
import com.loiane.springshoppingcart.repository.ProductRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@RestController
@RequestMapping("/api/products")
public class ProductController {

    private final ProductRepository repository;

    public ProductController(ProductRepository repository) {
        this.repository = repository;
    }

    @GetMapping
    public Flux<Product> getAll() {
        return repository.findAll();
    }

    @GetMapping("{id}")
    public Mono<ResponseEntity<Product>> getById(@PathVariable String id) {
        return repository.findById(id)
                .map(ResponseEntity::ok)
                .defaultIfEmpty(ResponseEntity.notFound().build());
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Mono<Product> create(@RequestBody Product product) {
        return repository.save(product);
    }

    @PutMapping("{id}")
    public Mono<ResponseEntity<Product>> update(@PathVariable String id,
                                                @RequestBody Product product) {
        return repository.findById(id)
                .flatMap(existingProduct -> {
                    existingProduct.setName(product.getName());
                    return repository.save(existingProduct);
                })
                .map(ResponseEntity::ok)
                .defaultIfEmpty(ResponseEntity.notFound().build());
    }

    @DeleteMapping("{id}")
    public Mono<ResponseEntity<Void>> delete(@PathVariable(value = "id") String id) {
        return repository.findById(id)
                .flatMap(existingProduct ->
                        repository.delete(existingProduct)
                                .then(Mono.just(ResponseEntity.ok().<Void>build()))
                )
                .defaultIfEmpty(ResponseEntity.notFound().build());
    }
}
