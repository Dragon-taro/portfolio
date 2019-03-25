package model

import (
	"github.com/jinzhu/gorm"
)

// Question ...
type Question struct {
	ID        int    `json:"id"`
	Text      string `json:"text"`
	CreatedAt string `json:"created_at"`
	UpdatedAt string `json:"updated_at"`
}

// AllQuestions ...
func AllQuestions(db *gorm.DB) (*[]Question, error) {
	questions := new([]Question)
	result := db.Find(&questions)
	if result.Error != nil {
		return nil, result.Error
	}

	return questions, nil
}
