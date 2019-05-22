FROM openjdk:10-jre-slim
COPY ./target/spring-shopping-cart-1.0-SNAPSHOT.jar /usr/src/app/
WORKDIR /usr/src/app
EXPOSE 8080
CMD ["java", "-jar", "spring-shopping-cart-1.0-SNAPSHOT.jar"]

# docker build -t spring-shopping-cart -f Dockerfile .
# docker run -p 8080:8080 spring-shopping-cart
# docker-compose up

# lsof -n -i4TCP:8080
# kill -9 P
