package model

// Contact ...
type Contact struct {
	Name           string `json:"name"`
	ContactAddress string `json:"contact_address"`
	ContactType    string `json:"contact_type"`
	Details        string `json:"details"`
}

// Message ...
type Message struct {
	Pretext string `json:"pretext"`
	Title   string `json:"title"`
	Color   string `json:"color"`
	Text    string `json:"text"`
}

// NotifySlack ...
func (contact *Contact) NotifySlack() Message {
	message := contact.formatMessage()

	// ここでslackの送信処理

	return message
}

func (contact *Contact) formatMessage() Message {
	message := Message{
		Pretext: contact.ContactAddress + "さんからのお問い合わせです。",
		Title:   contact.ContactType,
		Color:   "good",
		Text:    contact.Details,
	}
	return message
}
