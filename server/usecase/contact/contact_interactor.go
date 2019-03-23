package contact

import (
	"encoding/json"

	"github.com/Dragon-taro/portfolio/server/domain/contact"
)

// ContactInteractor ...
type ContactInteractor struct {
	ContactRepository ContactRepository
}

// SlackAttachments ...
type SlackAttachments struct {
	title   string `json:"title"`
	pretext string `json:"pretext"`
	color   string `json: "color"`
	text    string `json: "text"`
}

// NotifyContact ... 通知を送るために抽象化してる
func (interactor *ContactInteractor) NotifyContact(contact contact.Contact) error {
	message := interactor.formatMessage(contact)
	err := interactor.ContactRepository.Notify(message)
	if err != nil {
		return err
	}

	return err
}

func (interactor *ContactInteractor) formatMessage(contact contact.Contact) string {
	message := SlackAttachments{
		pretext: "お問い合わせがありました。",
		title:   contact.ContactType,
		color:   "good",
		text:    contact.Details,
	}
	jsonBytes, _ := json.Marshal(message)
	return string(jsonBytes)
}
