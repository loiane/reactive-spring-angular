package com.loiane.springshoppingcart;

import com.loiane.springshoppingcart.model.Order;
import com.loiane.springshoppingcart.model.Product;
import com.loiane.springshoppingcart.repository.OrderRepository;
import com.loiane.springshoppingcart.repository.ProductRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import reactor.core.publisher.Flux;

import java.time.Duration;
import java.util.UUID;

@SpringBootApplication
public class SpringShoppingCartApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringShoppingCartApplication.class, args);
	}

	@Bean
    CommandLineRunner init(ProductRepository repository) {
		return args -> {
			repository
					.deleteAll()
					.subscribe(null, null, () -> {
						Flux.interval(Duration.ofSeconds(1))
								.take(11)
								.map(i -> i.intValue() + 1)
								.map(i -> {
								    Product p = new Product();
								    p.setId(UUID.randomUUID().toString());
								    p.setName("Coffee " + i);
								    p.setDescription("Coffee");
								    p.setPrice(i + 1.50);
								    p.setDiscount(0.7);
								    if (i % 3 == 0) {
								    	p.setStatus("sale");
								    	p.setDiscounted("discounted");
									}
									p.setImage(i.toString());
								    return p;
                                })
								.map(record -> repository.save(record)
										.subscribe(System.out::println))
								.subscribe();
					});
		};
	}

	@Bean
	CommandLineRunner initOrder(OrderRepository repository) {

	    String[] colors = {"blue", "purple", "pink", "green"};
        String[] status = {"Order Received", "Order Confirmed", "Order Being Prepared", "Delivered"};

		return args -> {
			repository
					.deleteAll()
					.subscribe(null, null, () -> {
						Flux.interval(Duration.ofSeconds(1))
								.take(4)
								.map(i -> i.intValue() + 1)
								.map(i -> new Order(UUID.randomUUID().toString(), colors[i-1], status[i-1]))
								.map(record -> repository.save(record)
										.subscribe(System.out::println))
								.subscribe();
					});
		};
	}
}
