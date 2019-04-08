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
	db, err := database.DBConnect()
	if err != nil {
		log.Println(err)
	}
	defer db.Close()

	// contact
	contactController := new(controller.ContactController)
	api.POST("/contact", func(c echo.Context) error {
		return contactController.Index(c)
	})

	// questions
	questionController := controller.NewQuestionController(db)
	api.GET("/questions", func(c echo.Context) error {
		return questionController.Index(c)
	})
	api.GET("/questions/:id", func(c echo.Context) error {
		return questionController.Show(c)
	})
	api.POST("/questions", func(c echo.Context) error {
		return questionController.Create(c)
	})

	// answers
	answerController := controller.NewAnswerController(db)
	api.POST("/answers", func(c echo.Context) error {
		return answerController.Create(c)
	})
	api.GET("/answers/:questionID", func(c echo.Context) error {
		return answerController.Show(c)
	})

	e.Logger.Fatal(e.Start(":8080"))
}
