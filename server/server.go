package main

import (
	"github.com/Dragon-taro/portfolio/server/controller"
	"github.com/labstack/echo"
	"github.com/labstack/echo/middleware"
)

func main() {
	e := echo.New()
	e.Use(middleware.Logger())
	api := e.Group("/api")

	// contact
	contactController := new(controller.ContactController)
	api.POST("/contact", func(c echo.Context) error {
		return contactController.Index(c)
	})

	e.Logger.Fatal(e.Start(":8080"))
}
