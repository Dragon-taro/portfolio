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

	resp, err := contact.NotifySlack()
	if err != nil {
		return c.JSON(http.StatusInternalServerError, err)
	}

	return c.JSON(http.StatusOK, resp)
}
