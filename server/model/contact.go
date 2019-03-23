package model

import (
	"encoding/json"

	"github.com/Dragon-taro/portfolio/server/utils"
)

// Contact ...
type Contact struct {
	Name           string `json:"name"`
	ContactAddress string `json:"contact_address"`
	ContactType    string `json:"contact_type"`
	Details        string `json:"details"`
}

// Message ... あまりに適当すぎる。。
type Message struct {
	Attachments []Attachment `json:"attachments"`
}

// Attachment ...
type Attachment struct {
	Pretext string `json:"pretext"`
	Title   string `json:"title"`
	Color   string `json:"color"`
	Text    string `json:"text"`
}

// NotifySlack ...
func (contact *Contact) NotifySlack() (string, error) {
	message := contact.formatMessage()
	jsonBytes, _ := json.Marshal(message)

	resp, err := utils.SlackNotifier(jsonBytes)
	if err != nil {
		return "", err
	}

	return resp, nil
}

func (contact *Contact) formatMessage() Message {
	message := Message{
		Attachments: []Attachment{
			Attachment{
				Pretext: contact.ContactAddress + "さんからのお問い合わせです。",
				Title:   contact.ContactType,
				Color:   "good",
				Text:    contact.Details,
			},
		},
	}
	return message
}
