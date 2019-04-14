package types

import "time"

// Question ...
type Question struct {
	ID        int       `json:"id"`
	Text      string    `json:"text"`
	CreatedAt time.Time `json:"createdAt"`
	UpdatedAt time.Time `json:"updatedAt"`
}

// Questions ...
type Questions struct {
	Questions []Question `json:"questions"`
	TotalPage int        `json:"totalPage"`
}
