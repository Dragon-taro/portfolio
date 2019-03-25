package controller

import (
	"net/http"

	"github.com/Dragon-taro/portfolio/server/model"
	"github.com/jinzhu/gorm"

	"github.com/labstack/echo"
)

// QuestionController ...
type QuestionController struct {
	DB *gorm.DB
}

// NewQuestionController ... init QuestionController
func NewQuestionController(db *gorm.DB) *QuestionController {
	q := new(QuestionController)
	q.DB = db
	return q
}

// Index ... resposes of questions array
func (controller *QuestionController) Index(c echo.Context) error {
	questions, err := model.AllQuestions(controller.DB)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, err)
	}

	return c.JSON(http.StatusOK, questions)
}
