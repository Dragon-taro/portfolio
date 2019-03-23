package controller

import (
	"net/http"

	"github.com/Dragon-taro/portfolio/server/model"
	"github.com/labstack/echo"
)

// ContactController ...
type ContactController struct {
}

// Index ...
func (controller *ContactController) Index(c echo.Context) error {
	contact := new(model.Contact)
	c.Bind(contact)

	message := contact.NotifySlack()

	return c.JSON(http.StatusOK, message)
}
