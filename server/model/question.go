package model

import (
	"github.com/Dragon-taro/portfolio/server/types"
	"github.com/jinzhu/gorm"
)

// AllQuestions ...
func AllQuestions(db *gorm.DB) (*[]types.Question, error) {
	questions := new([]types.Question)
	result := db.Find(&questions)
	if result.Error != nil {
		return nil, result.Error
	}

	return questions, nil
}

// OneQuestion ...
func OneQuestion(db *gorm.DB, id int) (*types.Question, error) {
	question := new(types.Question)
	result := db.First(&question, id)
	if result.Error != nil {
		return nil, result.Error
	}

	return question, nil
}

// CreateQuestion ...
func CreateQuestion(db *gorm.DB, q *types.Question) error {
	result := db.Create(q)
	if result.Error != nil {
		return db.Error
	}

	return nil
}
