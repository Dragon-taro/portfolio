package model

import (
	"github.com/Dragon-taro/portfolio/server/types"
	"github.com/jinzhu/gorm"
)

// CreateAnswer ...
func CreateAnswer(db *gorm.DB, a *types.Answer) error {
	result := db.Create(a)
	if result.Error != nil {
		return result.Error
	}

	return nil
}

// UpdateAnswer ... update all columns of a single record
func UpdateAnswer(db *gorm.DB, a *types.Answer) error {
	result := db.Save(a)
	if result.Error != nil {
		return result.Error
	}

	return nil
}

// AnswerByQuestionID ... find by question_id and return one answer
func AnswerByQuestionID(db *gorm.DB, id int) (*types.Answer, error) {
	answer := new(types.Answer)
	result := db.First(&answer, "question_id=?", id)
	if err := result.Error; err != nil {
		if gorm.IsRecordNotFoundError(err) {
			return nil, nil
		}
		return nil, err
	}

	return answer, nil
}
