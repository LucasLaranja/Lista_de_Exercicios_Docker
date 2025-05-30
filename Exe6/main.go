package main

import (
    "fmt"
    "net/http"
)

func handler(w http.ResponseWriter, r *http.Request) {
    fmt.Fprintf(w, "PONG")
}

func main() {
    http.HandleFunc("/ping", handler)
    fmt.Println("Server is running on port 8080...")
    http.ListenAndServe(":8080", nil)
}
