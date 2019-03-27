package model

import (
	"time"

	"github.com/jinzhu/gorm"
)

// Answer ...
type Answer struct {
	ID         int       `json:"id"`
	Text       string    `json:"text"`
	QuestionID int       `json:"questionId"`
	CreatedAt  time.Time `json:"createdAt"`
	UpdatedAt  time.Time `json:"updatedAt"`
}

// CreateAnswer ...
func CreateAnswer(db *gorm.DB, a *Answer) error {
	result := db.Create(a)
	if result.Error != nil {
		return result.Error
	}

	return nil
}

// UpdateAnswer ... update all columns of a single record
func UpdateAnswer(db *gorm.DB, a *Answer) error {
	result := db.Save(a)
	if result.Error != nil {
		return result.Error
	}

	return nil
}
