package model

import (
	"time"

	"github.com/jinzhu/gorm"
)

// Question ...
type Question struct {
	ID        int       `json:"id"`
	Text      string    `json:"text"`
	CreatedAt time.Time `json:"createdAt"`
	UpdatedAt time.Time `json:"updatedAt"`
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

// OneQuestion ...
func OneQuestion(db *gorm.DB, id int) (*Question, error) {
	question := new(Question)
	result := db.First(&question, id)
	if result.Error != nil {
		return nil, result.Error
	}

	return question, nil
}

// CreateQuestion ...
func CreateQuestion(db *gorm.DB, q *Question) error {
	result := db.Create(q)
	if result.Error != nil {
		return db.Error
	}

	return nil
}
