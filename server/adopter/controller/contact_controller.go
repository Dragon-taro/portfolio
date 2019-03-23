package controller

import (
	"net/http"

	"github.com/Dragon-taro/portfolio/server/infrastructure"
	"github.com/Dragon-taro/portfolio/server/usecase/contact"
)

type ContactController struct {
	Interactor contact.ContactInteractor
}

func NewContactController(notifier infrastructure.SlackNortifier) *ContactController {
	return &ContactController{
		Interactor: contact.ContactInteractor{
			ContactRepository: contact.ContactRepository{
				Notify: notifier,
			},
		},
	}
}

func (controller *ContactController) Index(c Context) {
	contact := c.Param
	c.Bind(&contact)
	err := controller.Interactor.NotifyContact(contact)
	if err != nil {
		c.JSON(http.StatusInternalServerError, err)
	}

	c.JSON(http.StatusOK, "notify success")
}
