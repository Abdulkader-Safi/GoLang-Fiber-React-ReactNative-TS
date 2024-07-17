package main

import (
	"github.com/Abdulkader-Safi/Go-Auth-jwt-Fiber/database"
	"github.com/Abdulkader-Safi/Go-Auth-jwt-Fiber/routes"
	"github.com/joho/godotenv"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
)

func main() {
	godotenv.Load()
	database.Connect()

	app := fiber.New()

	app.Use(cors.New(cors.Config{
		AllowOrigins:     "http://localhost:5173",
		AllowCredentials: true,
	}))

	routes.Setup(app)

	app.Listen("0.0.0.0:3030")
}
