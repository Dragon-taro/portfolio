package model

import (
	"github.com/Dragon-taro/portfolio/server/types"
	"github.com/jinzhu/gorm"
)

// AllQuestions ...
func AllQuestions(db *gorm.DB, offset int) (*types.Questions, error) {
	q := new(types.Questions)
	result := db.Order("created_at desc").Limit(10).Offset(offset * 10).Find(&q.Questions)
	if result.Error != nil {
		return nil, result.Error
	}

	// inform client of total page count
	var count int
	result = db.Table("questions").Count(&count)
	if result.Error != nil {
		return nil, result.Error
	}

	q.TotalPage = count/10 + 1

	return q, nil
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
