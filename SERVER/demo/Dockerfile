FROM bellsoft/liberica-openjdk-alpine:17 AS builder

WORKDIR /app
COPY . /app

RUN chmod +x ./gradlew && ./gradlew clean build
RUN cp /app/build/libs/*SNAPSHOT.jar /app/app.jar

FROM bellsoft/liberica-openjdk-alpine:17 AS runner

COPY --from=builder /app/app.jar app.jar
WORKDIR /app
ENTRYPOINT ["java","-jar","/app.jar"]