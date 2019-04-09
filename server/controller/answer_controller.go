package controller

import (
	"net/http"
	"strconv"

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

	return c.JSON(http.StatusCreated, answer)
}

// Update ...
func (a *AnswerController) Update(c echo.Context) error {
	answer := new(types.Answer)
	c.Bind(answer)

	if err := model.UpdateAnswer(a.DB, answer); err != nil {
		return c.JSON(http.StatusInternalServerError, err)
	}

	return c.JSON(http.StatusOK, answer)
}

// Show ...
func (a *AnswerController) Show(c echo.Context) error {
	questionID, err := strconv.Atoi(c.Param("questionID"))
	if err != nil {
		return c.JSON(http.StatusInternalServerError, err)
	}
	answer, err := model.AnswerByQuestionID(a.DB, questionID)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, err)
	}

	return c.JSON(http.StatusOK, answer)
}
