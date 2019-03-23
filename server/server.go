package main

import (
	"github.com/Dragon-taro/portfolio/server/adopter/controller"
	"github.com/labstack/echo"
	"github.com/labstack/echo/middleware"
)

func main() {
	e := echo.New()
	e.Use(middleware.Logger())
	api := e.Group("/api")
	notifier := infractracuture.NewSlackNotifier("hoge")
	contactController := controller.NewContactController()
	api.POST("/contact", func(c echo.Context) error {
		contactController.Index
	})
	e.Logger.Fatal(e.Start(":8080"))
}
