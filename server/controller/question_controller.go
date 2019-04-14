package controller

import (
	"net/http"
	"strconv"

	"github.com/Dragon-taro/portfolio/server/model"
	"github.com/Dragon-taro/portfolio/server/types"
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
func (q *QuestionController) Index(c echo.Context) error {
	page, err := strconv.Atoi(c.QueryParam("page"))
	if err != nil {
		page = 0
	}

	questions, err := model.AllQuestions(q.DB, page)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, err)
	}

	return c.JSON(http.StatusOK, questions)
}

// Create ...
func (q *QuestionController) Create(c echo.Context) error {
	question := new(types.Question)
	c.Bind(question)

	if err := model.CreateQuestion(q.DB, question); err != nil {
		return c.JSON(http.StatusInternalServerError, err)
	}

	return c.JSON(http.StatusCreated, question)
}

// Show ...
func (q *QuestionController) Show(c echo.Context) error {
	id, err := strconv.Atoi(c.Param("id"))
	if err != nil {
		return c.JSON(http.StatusInternalServerError, err)
	}

	question, err := model.OneQuestion(q.DB, id)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, err)
	}

	if question == nil {
		return c.JSON(http.StatusNotFound, "Cannot find a question.")
	}

	return c.JSON(http.StatusOK, question)
}
