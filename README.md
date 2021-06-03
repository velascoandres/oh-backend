# Open House Backend


## Setup project enviroment


1. Configure the .env file for example:

```text
# mail
MAIL_HOST=smtp.faker.com
MAIL_USER=email@fake.com
MAIL_PASSWORD=fake123
MAIL_FROM=noreply@example.com

# google cloud storage
BUCKET_NAME=faker

# optional
MAIL_TRANSPORT=smtp://${MAIL_USER}:${MAIL_PASSWORD}@${MAIL_HOST}
```


2. Install Dependencies

```shell script
npm install
```

3. Run docker compose


```shell script
docker-compose up -d
```

4. Exports Google Cloud Credentials

```shell script
export GOOGLE_APPLICATION_CREDENTIALS="/<key-path>/<your-key>.json"
```

5. Start the web server on development mode

```shell script
  npm run start:dev
```
