# lets-go-further

## Migrations

### Create
migrate create -seq -ext=.sql -dir=./migrations create_movies_table

### Execute
migrate -path=./migrations -database=$LETSGOFURTHER_DB_DSN up