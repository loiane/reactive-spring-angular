package com.loiane.springshoppingcart.controller;

import com.loiane.springshoppingcart.model.Order;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.reactive.server.WebTestClient;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class OrderControllerTests {

    private static final String ORDERS_URI = "/api/orders/stream";
    
    @Autowired
    private WebTestClient webTestClient;

	@Test
	public void testStreamOrderStatusIsOk() {
		webTestClient
                .get().uri(ORDERS_URI)
                .accept(MediaType.TEXT_EVENT_STREAM)
                .exchange()
                .expectStatus().isOk()
                .returnResult(Order.class);
    }
}
