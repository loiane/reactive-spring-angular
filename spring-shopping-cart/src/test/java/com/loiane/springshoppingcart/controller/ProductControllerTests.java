package com.loiane.springshoppingcart.controller;

import com.loiane.springshoppingcart.model.Product;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.reactive.server.WebTestClient;
import org.springframework.web.reactive.function.BodyInserters;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class ProductControllerTests {

    private static final String PRODUCTS_URI = "/api/products";

    @Autowired
    private WebTestClient webTestClient;
    
    @Test
    public void testGetAll() {
        webTestClient
                .get().uri(PRODUCTS_URI)
                .exchange()
                .expectStatus().isOk()
                .expectBodyList(Product.class);
    }

    @Test
    public void testCreate() {
        Product product = new Product(null, "name", "description", 1.0, "image", "Active", "false", 0.0);
        webTestClient
                .post().uri(PRODUCTS_URI)
                .contentType(MediaType.APPLICATION_JSON)
                .body(BodyInserters.fromValue(product))
                .exchange()
                .expectStatus().isCreated();
    }

    @Test
    public void testGetByIdNotFound() {
        webTestClient
                .get().uri(PRODUCTS_URI + "/1")
                .exchange()
                .expectStatus().isNotFound();
    }
}