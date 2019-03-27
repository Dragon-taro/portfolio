package types

import "time"

// Question ...
type Question struct {
	ID        int       `json:"id"`
	Text      string    `json:"text"`
	CreatedAt time.Time `json:"createdAt"`
	UpdatedAt time.Time `json:"updatedAt"`
}

// QuestionRespone ...
type QuestionRespone struct {
	Question *Question `json:"question"`
	Answer   *Answer   `json:"answer"`
}
