package main

import (
	"log"

	"github.com/Dragon-taro/portfolio/server/controller"
	"github.com/Dragon-taro/portfolio/server/database"
	"github.com/labstack/echo"
	"github.com/labstack/echo/middleware"
)

func main() {
	e := echo.New()
	e.Use(middleware.Logger())
	api := e.Group("/api")
	_, err := database.DBConnect()
	if err != nil {
		log.Println(err)
	}

	// contact
	contactController := new(controller.ContactController)
	api.POST("/contact", func(c echo.Context) error {
		return contactController.Index(c)
	})

	e.Logger.Fatal(e.Start(":8080"))
}
