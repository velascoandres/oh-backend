# Open House Backend


## Setup project enviroment

1. [With Dockerized application](#with-dockerized-application)
2. [Without Dockerized application](#without-dockerized-application)


### With Dockerized application
This application was dockerized, So you need to have docker installed in your virtual machine

1. Configure the .env like the following template

```text
# mail
MAIL_HOST=smtp.faker.com
MAIL_USER=email@fake.com
MAIL_PASSWORD=fake123
MAIL_FROM=noreply@example.com

# google cloud and firebase
BUCKET_NAME=faker
GOOGLE_APPLICATION_CREDENTIALS=/usr/src/app/<key.json>

# redis
REDIS_HOST=localhost
REDIS_PORT=30502

# optional
MAIL_TRANSPORT=smtp://${MAIL_USER}:${MAIL_PASSWORD}@${MAIL_HOST}
```


2. Run docker compose


```shell script
docker-compose up -d dev
```

### Without Dockerized application

Just run docker compose for the following services


```shell script
docker-compose up -d mysql_db mongo_db redis_db 
```

Run the server on development mode

```shell script
npm run start:dev
```
