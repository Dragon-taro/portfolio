package database

import (
	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/mysql"
)

// DBConnect ... create connection to mysql contaienr
func DBConnect() (*gorm.DB, error) {
	dbconf := "user:pass@tcp(mysql:3306)/db?parseTime=true"
	db, err := gorm.Open("mysql", dbconf)
	if err != nil {
		return nil, err
	}

	return db, nil
}
