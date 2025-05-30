FROM golang:1.21 AS builder

WORKDIR /app

COPY . .

RUN CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -ldflags="-s -w" -o exe6

# ------------------
FROM alpine:latest

WORKDIR /app
COPY --from=builder /app/exe6 .

EXPOSE 8080

CMD ["./exe6"]

