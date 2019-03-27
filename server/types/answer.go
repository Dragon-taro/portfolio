package types

import "time"

// Answer ...
type Answer struct {
	ID         int       `json:"id"`
	Text       string    `json:"text"`
	QuestionID int       `json:"questionId"`
	CreatedAt  time.Time `json:"createdAt"`
	UpdatedAt  time.Time `json:"updatedAt"`
}
