package controller

import (
	"net/http"

	"github.com/Dragon-taro/portfolio/server/model"
	"github.com/Dragon-taro/portfolio/server/types"
	"github.com/jinzhu/gorm"

	"github.com/labstack/echo"
)

// AnswerController ...
type AnswerController struct {
	DB *gorm.DB
}

// NewAnswerController ... init AnswerController
func NewAnswerController(db *gorm.DB) *AnswerController {
	a := new(AnswerController)
	a.DB = db
	return a
}

// Create ...
func (a *AnswerController) Create(c echo.Context) error {
	answer := new(types.Answer)
	c.Bind(answer)

	if err := model.CreateAnswer(a.DB, answer); err != nil {
		return c.JSON(http.StatusInternalServerError, err)
	}

	return c.JSON(http.StatusCreated, "created successfully")
}

// Update ...
func (a *AnswerController) Update(c echo.Context) error {
	answer := new(types.Answer)
	c.Bind(answer)

	if err := model.UpdateAnswer(a.DB, answer); err != nil {
		return c.JSON(http.StatusInternalServerError, err)
	}

	return c.JSON(http.StatusOK, "updated successfully")
}
