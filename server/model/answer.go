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

// OneAnswer ... return one answer
func OneAnswer(db *gorm.DB, id int) (*types.Answer, error) {
	answer := new(types.Answer)
	result := db.First(&answer, id)
	err := result.Error
	if err != nil {
		if gorm.IsRecordNotFoundError(err) {
			return nil, nil
		}

		return nil, err
	}

	return answer, nil
}
